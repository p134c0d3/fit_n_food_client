import { User } from "./user";

export class Profile {
  bio: string;
  goals: string;
  id?: number;
  user?: User;

  constructor(profile:any) {
    this.bio = profile.bio || '';
    this.goals = profile.goals || '';
    this.id = profile.id || 0;
    this.user = profile.user || null;
  }
}
