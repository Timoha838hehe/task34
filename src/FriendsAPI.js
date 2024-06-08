// src/FriendsAPI.js
const FriendsAPI = {
  friends: [
    { id: 1, name: "John Doe", age: 25, hobby: "Reading" },
    { id: 2, name: "Jane Smith", age: 30, hobby: "Traveling" },
    { id: 3, name: "Sam Wilson", age: 20, hobby: "Gaming" },
    { id: 4, name: "Sara Connor", age: 35, hobby: "Cooking" }
  ],
  all: function() { return this.friends },
  get: function(id) {
    const isFriend = f => f.id === id;
    return this.friends.find(isFriend);
  }
};

export default FriendsAPI;
