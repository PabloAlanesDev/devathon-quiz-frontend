export const getAvatar = (): string => {
  const avatars = [
    "oscar",
    "milo",
    "jack",
    "angel",
    "gizmo",
    "nala",
    "cali",
    "patches",
    "snowball",
    "buddy",
    "simba",
    "callie",
    "rocky",
    "precious",
    "oliver",
    "maggie",
    "zoey",
    "scooter",
    "mimi",
    "sammy",
  ];
  const indexAvatar = Math.floor(Math.random() * avatars.length);

  const avatar = `https://api.dicebear.com/8.x/bottts/svg/seed=${avatars[indexAvatar]}`;

  return avatar;
};
