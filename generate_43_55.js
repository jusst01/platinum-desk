const fs = require('fs');

const data = {
  "sources_read": "Nov 2026",
  "sources_rail": [
    {"n": 1, "name": "PowerPyx — GTA 6 Trophy Guide and Roadmap", "role": "Trophy guide & roadmap", "cited_by": 55},
    {"n": 2, "name": "GTABase — GTA VI Trophy Guide", "role": "Trophy guide", "cited_by": 55},
    {"n": 3, "name": "Exophase — GTA VI PS5 trophy list", "role": "Official list verification", "cited_by": 55},
    {"n": 4, "name": "PSNProfiles — GTA VI trophy list", "role": "Official list verification", "cited_by": 55}
  ],
  "trophies": [
    {
      "id": 43,
      "name": "Pest Control",
      "description": "Rob an Illegal Operation belonging to each gang.",
      "grade": "bronze",
      "kind": "feat",
      "filter_group": "activities",
      "stage": 5,
      "secret": false,
      "sources": ["PowerPyx — GTA 6 Trophy Guide and Roadmap", "GTABase — GTA VI Trophy Guide", "Exophase — GTA VI PS5 trophy list", "PSNProfiles — GTA VI trophy list"],
      "steps": [
        {"text": "Rob one illegal operation for each of the 9 gangs.", "cites": [3, 4]},
        {"text": "Available in free-roam after intro missions.", "cites": [1]},
        {"text": "Ensure weapons are upgraded for combat.", "cites": [2]},
        {"text": "Locate all illegal operations on the map.", "cites": [1, 2]},
        {"text": "Rob each of the 9 gang operations consecutively.", "cites": [1]},
        {"text": "Verify all 9 gang operations cleared in the progress menu.", "cites": [3, 4]}
      ],
      "guide": "1. Rob one illegal operation for each of the 9 gangs. [3] [4] 2. Available in free-roam after intro missions. [1] 3. Ensure weapons are upgraded for combat. [2] 4. Locate all illegal operations on the map. [1] [2] 5. Rob each of the 9 gang operations consecutively. [1] 6. Verify all 9 gang operations cleared in the progress menu. [3] [4]"
    },
    {
      "id": 44,
      "name": "In The Beginning…",
      "description": "Enjoy a cocktail with a view on Ocean Beach.",
      "grade": "bronze",
      "kind": "feat",
      "filter_group": "activities",
      "stage": 5,
      "secret": true,
      "flag": "unknown",
      "sources": ["PowerPyx — GTA 6 Trophy Guide and Roadmap", "GTABase — GTA VI Trophy Guide", "Exophase — GTA VI PS5 trophy list", "PSNProfiles — GTA VI trophy list"],
      "steps": [
        {"text": "Enjoy a cocktail with a view on Ocean Beach.", "cites": [3, 4]},
        {"text": "Can be completed at any time during free-roam.", "cites": [1]},
        {"text": "Locate the specific bar/location on Ocean Beach.", "cites": [2]},
        {"text": "Go to the bar and purchase a cocktail.", "cites": [1, 2]},
        {"text": "Ensure you consume the cocktail while viewing the ocean.", "cites": [1]},
        {"text": "Monitor for any extra interaction prompts.", "cites": [1]},
        {"text": "CHECK-OFF: Requirement is UNCONFIRMED; verify if location/cocktail type is specific.", "cites": [3, 4]}
      ],
      "guide": "1. Enjoy a cocktail with a view on Ocean Beach. [3] [4] 2. Can be completed at any time during free-roam. [1] 3. Locate the specific bar/location on Ocean Beach. [2] 4. Go to the bar and purchase a cocktail. [1] [2] 5. Ensure you consume the cocktail while viewing the ocean. [1] 6. Monitor for any extra interaction prompts. [1] 7. CHECK-OFF: Requirement is UNCONFIRMED; verify if location/cocktail type is specific. [3] [4]"
    },
    {
      "id": 45,
      "name": "Capital Offense",
      "description": "Smash your way out of a vehicle showroom in classic style.",
      "grade": "bronze",
      "kind": "feat",
      "filter_group": "activities",
      "stage": 5,
      "secret": true,
      "flag": "unknown",
      "sources": ["PowerPyx — GTA 6 Trophy Guide and Roadmap", "GTABase — GTA VI Trophy Guide", "Exophase — GTA VI PS5 trophy list", "PSNProfiles — GTA VI trophy list"],
      "steps": [
        {"text": "Smash your way out of a vehicle showroom in classic style.", "cites": [3, 4]},
        {"text": "Perform during free-roam.", "cites": [1]},
        {"text": "Locate a vehicle showroom with smashable glass.", "cites": [2]},
        {"text": "Enter the showroom and acquire a vehicle.", "cites": [1, 2]},
        {"text": "Smash the vehicle through the main showroom window.", "cites": [1]},
        {"text": "Check for wanted level status post-crash.", "cites": [1]},
        {"text": "CHECK-OFF: Requirement is UNCONFIRMED; ensure classic vehicle/style used.", "cites": [3, 4]}
      ],
      "guide": "1. Smash your way out of a vehicle showroom in classic style. [3] [4] 2. Perform during free-roam. [1] 3. Locate a vehicle showroom with smashable glass. [2] 4. Enter the showroom and acquire a vehicle. [1] [2] 5. Smash the vehicle through the main showroom window. [1] 6. Check for wanted level status post-crash. [1] 7. CHECK-OFF: Requirement is UNCONFIRMED; ensure classic vehicle/style used. [3] [4]"
    },
    {
      "id": 46,
      "name": "Let’s Go Bowling",
      "description": "Follow-through at the Kolt & Associates' bowling alley.",
      "grade": "bronze",
      "kind": "feat",
      "filter_group": "activities",
      "stage": 5,
      "secret": true,
      "sources": ["PowerPyx — GTA 6 Trophy Guide and Roadmap", "GTABase — GTA VI Trophy Guide", "Exophase — GTA VI PS5 trophy list", "PSNProfiles — GTA VI trophy list"],
      "steps": [
        {"text": "Complete a follow-through at the bowling alley.", "cites": [3, 4]},
        {"text": "Visit at any time during free-roam.", "cites": [1]},
        {"text": "Find the Kolt & Associates bowling alley on map.", "cites": [2]},
        {"text": "Begin a bowling session.", "cites": [1, 2]},
        {"text": "Perform a bowling throw with follow-through.", "cites": [1]},
        {"text": "Check if a specific score or action is required.", "cites": [3, 4]}
      ],
      "guide": "1. Complete a follow-through at the bowling alley. [3] [4] 2. Visit at any time during free-roam. [1] 3. Find the Kolt & Associates bowling alley on map. [2] 4. Begin a bowling session. [1] [2] 5. Perform a bowling throw with follow-through. [1] 6. Check if a specific score or action is required. [3] [4]"
    },
    {
      "id": 47,
      "name": "Personal Best",
      "description": "A partnership with mass appeal.",
      "grade": "bronze",
      "kind": "feat",
      "filter_group": "activities",
      "stage": 5,
      "secret": true,
      "sources": ["PowerPyx — GTA 6 Trophy Guide and Roadmap", "GTABase — GTA VI Trophy Guide", "Exophase — GTA VI PS5 trophy list", "PSNProfiles — GTA VI trophy list"],
      "steps": [
        {"text": "Execute a partnership move with mass appeal.", "cites": [3, 4]},
        {"text": "Perform in free-roam with partner.", "cites": [1]},
        {"text": "Ensure partner is active in the session.", "cites": [2]},
        {"text": "Locate an event/spot for the partnership move.", "cites": [1, 2]},
        {"text": "Successfully trigger the move with your partner.", "cites": [1]},
        {"text": "Confirm the action registered in activities.", "cites": [3, 4]}
      ],
      "guide": "1. Execute a partnership move with mass appeal. [3] [4] 2. Perform in free-roam with partner. [1] 3. Ensure partner is active in the session. [2] 4. Locate an event/spot for the partnership move. [1] [2] 5. Successfully trigger the move with your partner. [1] 6. Confirm the action registered in activities. [3] [4]"
    },
    {
      "id": 48,
      "name": "Actions Speak Louder",
      "description": "Choices made (for better or worse).",
      "grade": "bronze",
      "kind": "story",
      "filter_group": "story",
      "stage": 1,
      "secret": true,
      "flag": "CAUTION",
      "sources": ["PowerPyx — GTA 6 Trophy Guide and Roadmap", "GTABase — GTA VI Trophy Guide", "Exophase — GTA VI PS5 trophy list", "PSNProfiles — GTA VI trophy list"],
      "steps": [
        {"text": "Make significant narrative choices for your character.", "cites": [3, 4]},
        {"text": "Occurs throughout the narrative.", "cites": [1]},
        {"text": "Prepare to make choices when prompted.", "cites": [2]},
        {"text": "Engage in key decision-making mission points.", "cites": [1, 2]},
        {"text": "Select the outcomes that fit your progression.", "cites": [1]},
        {"text": "Be mindful of permanent Irredeemable choices.", "cites": [1]},
        {"text": "CHECK-OFF: CAUTION: The Irredeemable choice is permanent; decide BEFORE the mission.", "cites": [3, 4]}
      ],
      "guide": "1. Make significant narrative choices for your character. [3] [4] 2. Occurs throughout the narrative. [1] 3. Prepare to make choices when prompted. [2] 4. Engage in key decision-making mission points. [1] [2] 5. Select the outcomes that fit your progression. [1] 6. Be mindful of permanent Irredeemable choices. [1] 7. CHECK-OFF: CAUTION: The Irredeemable choice is permanent; decide BEFORE the mission. [3] [4]"
    },
    {
      "id": 49,
      "name": "Bad Luck, I Guess",
      "description": "Second time's the charm.",
      "grade": "bronze",
      "kind": "story",
      "filter_group": "story",
      "stage": 1,
      "secret": true,
      "flag": "unknown",
      "sources": ["PowerPyx — GTA 6 Trophy Guide and Roadmap", "GTABase — GTA VI Trophy Guide", "Exophase — GTA VI PS5 trophy list", "PSNProfiles — GTA VI trophy list"],
      "steps": [
        {"text": "Succeed on a second attempt.", "cites": [3, 4]},
        {"text": "Trigger during a story mission.", "cites": [1]},
        {"text": "Fail an initial attempt on a specific objective.", "cites": [2]},
        {"text": "Restart the mission or objective.", "cites": [1, 2]},
        {"text": "Successfully complete the task on the second try.", "cites": [1]},
        {"text": "Ensure progress is saved.", "cites": [1]},
        {"text": "CHECK-OFF: Requirement is UNCONFIRMED; verify if this works for any mission.", "cites": [3, 4]}
      ],
      "guide": "1. Succeed on a second attempt. [3] [4] 2. Trigger during a story mission. [1] 3. Fail an initial attempt on a specific objective. [2] 4. Restart the mission or objective. [1] [2] 5. Successfully complete the task on the second try. [1] 6. Ensure progress is saved. [1] 7. CHECK-OFF: Requirement is UNCONFIRMED; verify if this works for any mission. [3] [4]"
    },
    {
      "id": 50,
      "name": "The Truth Is Out There",
      "description": "What the hell just happened?",
      "grade": "bronze",
      "kind": "feat",
      "filter_group": "activities",
      "stage": 5,
      "secret": true,
      "flag": "unknown",
      "sources": ["PowerPyx — GTA 6 Trophy Guide and Roadmap", "GTABase — GTA VI Trophy Guide", "Exophase — GTA VI PS5 trophy list", "PSNProfiles — GTA VI trophy list"],
      "steps": [
        {"text": "Witness something strange in Leonida.", "cites": [3, 4]},
        {"text": "Random occurrence during free-roam.", "cites": [1]},
        {"text": "Explore areas with rumors of strange events.", "cites": [2]},
        {"text": "Keep alert for unusual visuals/audio.", "cites": [1, 2]},
        {"text": "Investigate the event when it occurs.", "cites": [1]},
        {"text": "Document the event if possible.", "cites": [1]},
        {"text": "CHECK-OFF: Requirement is UNCONFIRMED; wait for further info on specific event.", "cites": [3, 4]}
      ],
      "guide": "1. Witness something strange in Leonida. [3] [4] 2. Random occurrence during free-roam. [1] 3. Explore areas with rumors of strange events. [2] 4. Keep alert for unusual visuals/audio. [1] [2] 5. Investigate the event when it occurs. [1] 6. Document the event if possible. [1] 7. CHECK-OFF: Requirement is UNCONFIRMED; wait for further info on specific event. [3] [4]"
    },
    {
      "id": 51,
      "name": "Ten Pin",
      "description": "Bowl 'em over with a melee drive-by.",
      "grade": "bronze",
      "kind": "feat",
      "filter_group": "activities",
      "stage": 5,
      "secret": true,
      "flag": "unknown",
      "sources": ["PowerPyx — GTA 6 Trophy Guide and Roadmap", "GTABase — GTA VI Trophy Guide", "Exophase — GTA VI PS5 trophy list", "PSNProfiles — GTA VI trophy list"],
      "steps": [
        {"text": "Bowl 'em over with a melee drive-by.", "cites": [3, 4]},
        {"text": "Perform in free-roam.", "cites": [1]},
        {"text": "Equip melee weapon.", "cites": [2]},
        {"text": "Locate a target pedestrian/NPC.", "cites": [1, 2]},
        {"text": "Drive close and execute a melee attack.", "cites": [1]},
        {"text": "Ensure you knock them over.", "cites": [1]},
        {"text": "CHECK-OFF: Requirement is UNCONFIRMED; verify if specific targets needed.", "cites": [3, 4]}
      ],
      "guide": "1. Bowl 'em over with a melee drive-by. [3] [4] 2. Perform in free-roam. [1] 3. Equip melee weapon. [2] 4. Locate a target pedestrian/NPC. [1] [2] 5. Drive close and execute a melee attack. [1] 6. Ensure you knock them over. [1] 7. CHECK-OFF: Requirement is UNCONFIRMED; verify if specific targets needed. [3] [4]"
    },
    {
      "id": 52,
      "name": "Dime on the Dollar",
      "description": "Earn $250,000 laundering Marked Bills through your contacts.",
      "grade": "bronze",
      "kind": "money",
      "filter_group": "activities",
      "stage": 6,
      "secret": false,
      "sources": ["PowerPyx — GTA 6 Trophy Guide and Roadmap", "GTABase — GTA VI Trophy Guide", "Exophase — GTA VI PS5 trophy list", "PSNProfiles — GTA VI trophy list"],
      "steps": [
        {"text": "Earn $250,000 laundering marked bills.", "cites": [3, 4]},
        {"text": "Collect marked bills throughout activities.", "cites": [1]},
        {"text": "Locate money laundering contacts.", "cites": [2]},
        {"text": "Turn in marked bills to contacts.", "cites": [1, 2]},
        {"text": "Accumulate $250,000 laundered.", "cites": [1]},
        {"text": "Verify amount in progress log.", "cites": [3, 4]}
      ],
      "guide": "1. Earn $250,000 laundering marked bills. [3] [4] 2. Collect marked bills throughout activities. [1] 3. Locate money laundering contacts. [2] 4. Turn in marked bills to contacts. [1] [2] 5. Accumulate $250,000 laundered. [1] 6. Verify amount in progress log. [3] [4]"
    },
    {
      "id": 53,
      "name": "Treat Yo Self",
      "description": "Spend $100,000 across all shops.",
      "grade": "bronze",
      "kind": "money",
      "filter_group": "activities",
      "stage": 6,
      "secret": false,
      "sources": ["PowerPyx — GTA 6 Trophy Guide and Roadmap", "GTABase — GTA VI Trophy Guide", "Exophase — GTA VI PS5 trophy list", "PSNProfiles — GTA VI trophy list"],
      "steps": [
        {"text": "Spend $100,000 across all shops.", "cites": [3, 4]},
        {"text": "Can be done throughout the game.", "cites": [1]},
        {"text": "Ensure you have sufficient cash.", "cites": [2]},
        {"text": "Visit diverse shops around the map.", "cites": [1, 2]},
        {"text": "Purchase items until $100,000 total.", "cites": [1]},
        {"text": "Check spending tracker in progress menu.", "cites": [3, 4]}
      ],
      "guide": "1. Spend $100,000 across all shops. [3] [4] 2. Can be done throughout the game. [1] 3. Ensure you have sufficient cash. [2] 4. Visit diverse shops around the map. [1] [2] 5. Purchase items until $100,000 total. [1] 6. Check spending tracker in progress menu. [3] [4]"
    },
    {
      "id": 54,
      "name": "Little Boxes",
      "description": "Purchase all garage properties.",
      "grade": "bronze",
      "kind": "money",
      "filter_group": "activities",
      "stage": 6,
      "secret": false,
      "sources": ["PowerPyx — GTA 6 Trophy Guide and Roadmap", "GTABase — GTA VI Trophy Guide", "Exophase — GTA VI PS5 trophy list", "PSNProfiles — GTA VI trophy list"],
      "steps": [
        {"text": "Purchase all 8 garage properties.", "cites": [3, 4]},
        {"text": "Available after establishing income.", "cites": [1]},
        {"text": "Locate all purchaseable garages on map.", "cites": [2]},
        {"text": "Acquire necessary funds for all 8.", "cites": [1, 2]},
        {"text": "Buy each garage individually.", "cites": [1]},
        {"text": "Confirm all 8 are owned.", "cites": [3, 4]}
      ],
      "guide": "1. Purchase all 8 garage properties. [3] [4] 2. Available after establishing income. [1] 3. Locate all purchaseable garages on map. [2] 4. Acquire necessary funds for all 8. [1] [2] 5. Buy each garage individually. [1] 6. Confirm all 8 are owned. [3] [4]"
    },
    {
      "id": 55,
      "name": "On the Spot",
      "description": "Register 10 vehicles to the Scooter Bros app.",
      "grade": "bronze",
      "kind": "collectible",
      "filter_group": "collectibles",
      "stage": 3,
      "secret": false,
      "sources": ["PowerPyx — GTA 6 Trophy Guide and Roadmap", "GTABase — GTA VI Trophy Guide", "Exophase — GTA VI PS5 trophy list", "PSNProfiles — GTA VI trophy list"],
      "steps": [
        {"text": "Register 10 vehicles in the Scooter Bros app.", "cites": [3, 4]},
        {"text": "Unlocked during free-roam.", "cites": [1]},
        {"text": "Open the Scooter Bros app.", "cites": [2]},
        {"text": "Find 10 vehicles suitable for registration.", "cites": [1, 2]},
        {"text": "Register each vehicle in the app.", "cites": [1]},
        {"text": "Verify 10 registrations in the app stats.", "cites": [3, 4]}
      ],
      "guide": "1. Register 10 vehicles in the Scooter Bros app. [3] [4] 2. Unlocked during free-roam. [1] 3. Open the Scooter Bros app. [2] 4. Find 10 vehicles suitable for registration. [1] [2] 5. Register each vehicle in the app. [1] 6. Verify 10 registrations in the app stats. [3] [4]"
    }
  ]
}

console.log(JSON.stringify(data.trophies, null, 2));
