# extra

- User: (Guest)
  - today's food list
  - events list

- VerifiedUser:
  - Profile
  - Req History
  - Foods: Food[]
  - FoodRequested: Food[]
  - ReadToVolunteer: Boolean
  - Volunteer:
    - choice to opt in
    - list of available event:
      - req
      - decline
  - AddFood()
  - ReqFood()

- NGO:
  - Profile
  - Foods: Food[]
  - Events: Event[]
  - DonationInfo
  - Volunteer:
    - req new volunteer for event
    - manage volunteer requests
  - Req History()
  - AddEvent()
  - AddFood()
  - ReqFood()

- Event:
  - EID
  - Name
  - Desc
  - FromDate
  - ToDate
  - Location: Lid
  - Finished: Boolean = false
  - ThumbnailImage
  - Volunteer: Boolean = false
  - RequiredVolunteers: Int = 0
  - JoinedVolunteers: VerifiedUser[]

- Location:
  - Lid
  - Add1
  - Street
  - State
  - Pincode

    str self():
    retrun `{Add1}, {Street}, {State}, {Pincode}`

- Food:
  - FID
  - Category: enum(Veg, Non-veg)
  - Desc
  - Quantity
  - Location: Lid
  - OnDate
  - isAvailable: Boolean
  - ConsumedBy

foodHistory(): Food[]
eventHistory(): Event[]

Tables:
VerifiedUser
NGO
Event
Location
Food


User Table:
  - Name : String
  - Contact : String
  - email : String
  - Location : LID
  - Volunteer : Bollean
  - type : admin/ngo/user

Location Table:
  - Lid
  - Street
  - City
  - State
  - Pincode