const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/project-sheryians");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  profilepic: {
    type: String,
    default:
      "https://imgs.search.brave.com/6JInItWfo_Q3yKYEmU5OfZnBzJX67cjHOeE_htxmXDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMy/MDc1MTE3OC92ZWN0/b3IvcHJvZmlsZS1w/bGFjZWhvbGRlci1p/bWFnZS1ncmF5LXNp/bGhvdWV0dGUtbm8t/cGhvdG8uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVpiUDZw/NXBXalMyc2tmZFJI/ckhfZkVfam02eW1Y/LTZMaVpfXzlXYjQw/cHc9",
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

module.exports = mongoose.model("user", userSchema);
