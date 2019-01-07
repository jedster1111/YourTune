interface Data {
  [secretKey: string]: Profile;
}

interface Profile {
  id: number;
  username: string;
  secretKey: string;
}

export const data: Data = {
  jedkey: {
    id: 1,
    secretKey: "jedkey",
    username: "jedster1111"
  }
};

export function getUserById(secretKey: string): Profile | undefined {
  return data[secretKey];
}
