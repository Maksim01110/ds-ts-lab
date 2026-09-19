import {
  ColleagueV2,
  Friend,
  Buddy,
  BuddyList,
  Administrator,
} from "./myTypes";
import { friends } from "./01-basics";


const colleague1: ColleagueV2 = {
  name: "Banana man",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2: ColleagueV2 = {
  name: "George Costello",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3: ColleagueV2 = {
  name: "Abraham Lincoln",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};

function makeBuddyList(
  name: string,
  buddies: Buddy[],
  admin?: Administrator
): BuddyList {
  return {
    name,
    members: buddies,
    administrator: admin,
  } as BuddyList;
  // The as operator above casts an object to a specific type.
}
// Tests for makeBuddyList
const myFootballBuddies = makeBuddyList(
  "Football team",
  [colleague1, friends[0], colleague2],
  colleague1
)

const myBandBuddies = makeBuddyList(
    "Band name",
    [colleague3, friends[1]]
    // No administrator
  )

console.log(myFootballBuddies)
console.log(myBandBuddies)
//--------------------------------------
function findBuddyContact(list: BuddyList, name: string): string | undefined {
  for (const buddy of list.members) {
    if (buddy.name === name) {
      if ("phone" in buddy) {
        return buddy.phone;
      }
      else {
        return buddy.contact.email;
      }
    }
  }
  return undefined;
}
// Test for findBuddyContact.
console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Banana man"));

function getBuddyListFriends(list: BuddyList): Friend[] {
  return list.members.reduce((friends: Friend[], buddy) => {
    if ("phone" in buddy) {
      friends.push(buddy);
    }
    return friends;
  }, []);
}

// Test for getBuddyListFriends.
console.log(getBuddyListFriends(myFootballBuddies));
console.log(getBuddyListFriends(myBandBuddies));
