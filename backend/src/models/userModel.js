import crypto from "crypto";
import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell use your name:"],
    },
    email: {
      type: String,
      required: [true, "Please tell use your email:"],
      unique: true,
      lowercase: true,
      validate: [
        validator.isEmail,
        "Please provide a valid email",
      ],
    },
    photo: String,
    role: {
      type: String,
      enum: ["user", "admin", "guide", "lead-guide", "admin"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "Please tell use your name:"],
      minLength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        // this only works on SAVE
        validator: function (val) {
          return val === this.password;
        },
        message: "Password are ont the same!",
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre("save", async function (next) {
  // only rune this function if password was actually. modified
  if (!this.isModified("password")) return next();

  // hash the password with const of 12
  this.password = await bcrypt.hash(this.password, 12);

  // delete passwordConfirm
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changePasswordAfter = function (JWTTimesTamp) {
  if (this.passwordChangedAt) {
    const changedTimesStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    console.log({
      changedTimesStamp,
      JWTTimesTamp,
    });

    return JWTTimesTamp < changedTimesStamp;
  }
  // false means Not changed
  return false;
};

userSchema.methods.createPasswordRestToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  console.log({
    resetToken,
    passwordRestToken: this.passwordResetToken,
  });

  const now = Date.now() + 20 * 60 * 1000;
  this.passwordResetExpires = now;

  console.log({
    passwordResetExpires: this.passwordResetExpires,
    dataNow: Date.now() * 20 * 60 * 1000,
  });

  return resetToken;
};
const User = mongoose.model("User", userSchema);
export default User;
