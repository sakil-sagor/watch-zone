import React, { useEffect, useState } from "react";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState("");
  const [allAdmin, setAllAdmin] = useState([]);
  const [success, setSuccess] = useState(0);
  const handelField = (e) => {
    setAdmin(e.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => setAllAdmin(data));
  }, [success]);

  // make an admin
  const handelMakeAdmin = (e) => {
    const user = { admin };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("success");
          setSuccess(success + 1);
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h1 className="text-indigo-900 font-semibold text-4xl mb-6 ml-4">
          Admin Role
        </h1>
      </div>
      <hr />

      <div className="ml-4 my-8">
        <form onSubmit={handelMakeAdmin}>
          <label for="email">New Admin Email</label>
          <br />
          <input
            onBlur={handelField}
            className="bg-gray-300 text-xl py-2 px-4 rounded-lg my-4 w-3/4"
            type="email"
            name="email"
            id="email"
          />
          <br />
          <input
            value="Make Admin"
            type="submit"
            className="bg-indigo-800 hover:bg-indigo-900 py-2 px-4 text-white rounded-lg"
          />
        </form>
      </div>
      <div className="mt-12">
        <h1 className="text-indigo-900 font-semibold text-xl mb-6 ml-4 ">
          Admin List
        </h1>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {allAdmin.map((admin) => (
            <div className="my-2 ">
              <div className="shadow-2xl bg-indigo-200 p-3 rounded-lg">
                <div>
                  <h1>Name : {admin.name}</h1>
                  <h1>Email : {admin.email}</h1>
                </div>
                {/* <button type="submit" className="bg-indigo-800 hover:bg-indigo-900 py-2 px-4 text-white rounded-lg mt-4" >Remove from Admin</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
