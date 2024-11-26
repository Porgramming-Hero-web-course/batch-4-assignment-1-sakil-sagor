// 6: task 6
interface Profile {
  name: string;
  age: number;
  email: string;
}
const updateProfile = (
  profile: Profile,
  propValue: Partial<Profile>
): Profile => {
  return { ...profile, ...propValue };
};

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { name: "Alice amion", age: 501 }));
