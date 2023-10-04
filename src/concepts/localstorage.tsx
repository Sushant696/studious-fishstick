// // Use Local storage

// export default function Localstorage() {
//   //   setting  data to localStorage
//   try {
//     const data = "Hello , i'm going to set the data to local storage";
//     localStorage.setItem("key", data);
//   } catch (error) {
//     console.log("error saving data to the local storage", error);
//   }
//   //   Getting Items from local storage
//   try {
//     const data = localStorage.getItem("key");
//     console.log(data); // output  : Hello ,i'm going to set the data to local storage
//   } catch (error) {
//     console.log("error saving data to the local storage", error);
//   }

//   return <div></div>;
// }

// // use json stringfy and parse methods and play with bunch of other thing of localstorage you should be able to give in input and it should have to be saved in the localStorage with key value pair mode ..

// interface UserDataItem {
//   id: number;
//   name: string;
//   age: number;
// }

// export default function LocalStorage() {
//   const UserData: UserDataItem[] = [
//     {
//       id: 1,
//       name: "sushant",
//       age: 23,
//     },  
//     {
//       id: 2,
//       name: "Mark",
//       age: 35,
//     },
//   ];
//   // Stored into the local storage
//   localStorage.setItem("myKey", JSON.stringify(UserData));

//   //  retriving data from the local storage
//   const retrivedData: UserDataItem[] = JSON.parse(
//     localStorage.getItem("myKey")
//   );

//   return (
//     <div>
//       {retrivedData.map((curr , index) => (
//         <>
//         </>
//       ))}
//     </div>
//   );
// }
