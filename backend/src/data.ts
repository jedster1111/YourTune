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
  },
  mumkey: {
    id: 2,
    secretKey: "mumkey",
    username: "mum"
  }
};

export function getUserById(secretKey: string): Profile | undefined {
  return data[secretKey];
}
