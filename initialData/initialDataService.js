import { createUser, createCard } from "../model/dbAdapter.js";
import generateUniqueNumber from "../utils/generateUniqueNumber.js";

const initialUsers = async () => {
  let users = [
    {
      name: {
        first: "kenny",
        last: "mc",
      },
      phone: "0500000000",
      email: "kenny@gmail.com",
      password: "$2a$10$Tq3AH1Z0uEHo7MKbqMaUPOufejlQ8j8/Qs1Pne9YeKcyqOQVX28NK",
      image: {
        alt: "http://www.google.com",
      },
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      isBusiness: false,
      isAdmin: false,
    },
    {
      name: {
        first: "john",
        last: "wick",
      },
      phone: "0500000000",
      email: "john@gmail.com",
      password: "$2a$10$Tq3AH1Z0uEHo7MKbqMaUPOufejlQ8j8/Qs1Pne9YeKcyqOQVX28NK",
      image: {
        alt: "http://www.google.com",
      },
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      isBusiness: true,
      isAdmin: true,
    },
    {
      name: {
        first: "james",
        last: "bond",
      },
      phone: "0500000000",
      email: "james@gmail.com",
      password: "$2a$10$Tq3AH1Z0uEHo7MKbqMaUPOufejlQ8j8/Qs1Pne9YeKcyqOQVX28NK",
      image: {
        alt: "http://www.google.com",
      },
      address: {
        country: "asd",
        city: "asd",
        street: "asd",
        houseNumber: 10,
        zip: 12345,
      },
      isBusiness: true,
      isAdmin: false,
    },
  ];
  try {
    let bizId = "";
    for (let user of users) {
      let userFromDb = await createUser(user);
      if (!user.isAdmin && user.isBusiness) {
        bizId = userFromDb._id;
      }
    }
    return bizId;
  } catch (err) {
    return "";
  }
};

const initialCards = async (bizId) => {
  let cards = [
    {
      title: "car 1",
      subtitle: "sub car 1",
      description: "description card 1",
      phone: "0500000000",
      email: "card1@gmail.com",
      image: {
        url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=3683&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        country: "USA",
        city: "New York",
        street: "street 1",
        houseNumber: 10,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 2",
      subtitle: "sub card 2",
      description: "description card 2",
      phone: "0500000000",
      email: "card2@gmail.com",
      image: {
        url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        country: "USA",
        city: "New York",
        street: "street 1",
        houseNumber: 10,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 3",
      subtitle: "sub car 3",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=3709&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 4",
      subtitle: "sub car 4",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe1@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 5",
      subtitle: "sub car 5",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe2@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 6",
      subtitle: "sub car 6",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe3@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 7",
      subtitle: "sub car 7",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe4@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=3825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 8",
      subtitle: "sub car 8",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe5@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2724&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 9",
      subtitle: "sub car 9",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe6@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 10",
      subtitle: "sub car 10",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe7@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1555353540-64580b51c258?q=80&w=3678&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 11",
      subtitle: "sub car 11",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe8@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 12",
      subtitle: "sub car 12",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe9@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2655&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 13",
      subtitle: "sub car 13",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe10@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 14",
      subtitle: "sub car 14",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe11@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=3731&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 15",
      subtitle: "sub car 15",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe12@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
    {
      title: "car 16",
      subtitle: "sub car 16",
      description: "a test value for new card\na test value for new card\n",
      phone: "012-3211234",
      email: "qwe13@gmail.com",
      web: "www.bing.com",
      image: {
        url: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "image of something",
      },
      address: {
        state: "IL",
        country: "Israel",
        city: "Arad",
        street: "Shoham",
        houseNumber: 5,
        zip: 8920435,
      },
      bizNumber: await generateUniqueNumber(),
      user_id: bizId,
    },
  ];

  try {
    for (let card of cards) {
      await createCard(card);
    }
  } catch (err) {}
};

export { initialUsers, initialCards };
