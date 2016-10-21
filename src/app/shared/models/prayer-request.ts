import { Person } from './person';

export class PrayerRequest {
    constructor(
        public id: string,
        public text: string,
        public person: Person,
        public share: boolean
    ){ }
}
