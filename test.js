const RecentlyPlayedStore = require('./RecentlyPlayedStore');

describe('RecentlyPlayedStore', () => {
  let store;

  beforeEach(() => {
    store = new RecentlyPlayedStore(10, 5);
  });

  test('Add and retrieve recently played songs for users', () => {
    store.addUserSong('user1', 'song1');
    store.addUserSong('user2', 'song2');
    store.addUserSong('user1', 'song3');

    expect(store.getRecentlyPlayedForUser('user1')).toEqual(['song3', 'song1']);
    expect(store.getRecentlyPlayedForUser('user2')).toEqual(['song2']);
  });

  test('Recently played songs capacity is maintained', () => {
    for (let i = 1; i <= 15; i++) {
      store.addUserSong('user1', `song${i}`);
    }

    expect(store.getRecentlyPlayedForUser('user1').length).toBe(5);
  });

  // Add more test cases as needed
});
