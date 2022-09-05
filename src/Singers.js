import React from "react";

// const Singers = ({ name, age }) => {
//   //Destructing 2
//   //   const {name, age}=props Destructiring /

//   console.log(name, age);

//   return (
//     <div>
//       <p>
//         Im a singer : {name} et j'ai {age}
//         {" ans "}
//       </p>
//     </div>
//   );
// };

// export default Singers;

class Singers extends React.Component {
  render() {
    const { name, age } = this.props; // destructiring dans un composant de type Classe
    return (
      <div>
        <p>
          Im a singer : {name} et j'ai {age}
          {" ans "}
        </p>
      </div>
    );
  }
}

export default Singers;
