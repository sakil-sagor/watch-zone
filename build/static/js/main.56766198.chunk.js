(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    63: function (e, t, c) {},
    64: function (e, t, c) {},
    67: function (e, t, c) {},
    68: function (e, t, c) {},
    78: function (e, t, c) {},
    79: function (e, t, c) {},
    80: function (e, t, c) {},
    81: function (e, t, c) {},
    82: function (e, t, c) {},
    83: function (e, t, c) {},
    84: function (e, t, c) {},
    85: function (e, t, c) {},
    86: function (e, t, c) {},
    87: function (e, t, c) {},
    88: function (e, t, c) {},
    89: function (e, t, c) {
      c.r(t);
      var s = c(2),
        i = c.n(s),
        n = c(54),
        r = c.n(n),
        a = (c(63), c(10)),
        l = c(12),
        d = (c(64), c(6)),
        o = c(26),
        j = c(55),
        b = {
          apiKey: "AIzaSyCqNAwMQGiBk8sYOVfNnMqQ-tTcRscsdCE",
          authDomain: "watch-zone-5e6cc.firebaseapp.com",
          projectId: "watch-zone-5e6cc",
          storageBucket: "watch-zone-5e6cc.appspot.com",
          messagingSenderId: "68502578374",
          appId: "1:68502578374:web:7dbeae10ec82fa1e7923c7",
        };
      (function () {
        Object(j.a)(b);
      })();
      var x = function () {
          var e = Object(s.useState)({}),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1],
            n = Object(s.useState)(""),
            r = Object(d.a)(n, 2),
            a = r[0],
            l = r[1],
            j = Object(s.useState)(""),
            b = Object(d.a)(j, 2),
            x = b[0],
            u = b[1],
            h = Object(s.useState)(""),
            m = Object(d.a)(h, 2),
            O = m[0],
            p = m[1],
            f = Object(s.useState)(""),
            g = Object(d.a)(f, 2),
            v = g[0],
            A = g[1],
            N = Object(s.useState)(""),
            w = Object(d.a)(N, 2),
            y = w[0],
            k = w[1],
            P = Object(s.useState)(""),
            S = Object(d.a)(P, 2),
            C = S[0],
            E = S[1],
            B = Object(s.useState)(!0),
            L = Object(d.a)(B, 2),
            T = L[0],
            D = L[1],
            W = Object(s.useState)(!0),
            X = Object(d.a)(W, 2),
            q = X[0],
            R = X[1],
            M = Object(o.c)();
          Object(s.useEffect)(function () {
            D(!0);
            var e = Object(o.d)(M, function (e) {
              i(e || {}), D(!1);
            });
            return function () {
              return e;
            };
          }, []);
          Object(s.useEffect)(
            function () {
              fetch("http://localhost:5000/users/".concat(c.email))
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  R(e.admin);
                });
            },
            [c.email]
          );
          return {
            auth: M,
            user: c,
            admin: q,
            setAdmin: R,
            disName: y,
            errorReg: a,
            errorLogin: x,
            errorForPass: O,
            isLoading: T,
            saveUser: function (e, t, c) {
              var s = { name: e, email: t, role: "" };
              fetch("http://localhost:5000/users", {
                method: c,
                headers: { "content-type": "application/json" },
                body: JSON.stringify(s),
              }).then();
            },
            setIsLoading: D,
            setUser: i,
            setErrorReg: l,
            setErrorLogin: u,
            setErrorForPass: p,
            getEmail: function (e) {
              A(e.target.value);
            },
            manualLogin: function () {
              return Object(o.f)(M, v, C);
            },
            getPassword: function (e) {
              E(e.target.value);
            },
            getDisName: function (e) {
              k(e.target.value);
            },
            googleLogin: function () {
              var e = new o.a();
              return Object(o.g)(M, e);
            },
            ManualRegister: function () {
              return Object(o.b)(M, v, C);
            },
            logOut: function () {
              Object(o.h)(M)
                .then(function () {})
                .catch(function (e) {})
                .finally(function () {
                  return D(!1);
                });
            },
            forgatePass: function () {
              return Object(o.e)(M, v);
            },
            updateProfileName: function () {
              Object(o.i)(M.currentUser, { displayName: y });
            },
          };
        },
        u = c(0),
        h = Object(s.createContext)(),
        m = function (e) {
          var t = e.children,
            c = x();
          return Object(u.jsx)(h.Provider, { value: c, children: t });
        },
        O = function (e) {
          var t = e.title,
            c = e.content;
          return Object(u.jsx)("div", {
            className: "py-6 md:py-12 lg:py-20 leading-10 px-2",
            children: Object(u.jsxs)("div", {
              className: "container m-auto full-width-all",
              children: [
                Object(u.jsx)("h2", {
                  className:
                    "font-bold w-ful sm:w3/4 lg:w-2/4 text-4xl tracking-wide\t",
                  children: t,
                }),
                Object(u.jsx)("hr", { className: "w-12 my-4  border" }),
                Object(u.jsx)("p", {
                  className:
                    "w-full  sm:w-3/4 md:w-2/4 my-3 font-medium  tracking-wide text-2xl",
                  children: c,
                }),
              ],
            }),
          });
        },
        p = function (e) {
          var t = e.title,
            c = e.desc;
          return Object(u.jsxs)("div", {
            className: "p-6 text-center bg-white  shadow-xl rounded-xl",
            children: [
              Object(u.jsx)("h1", {
                className: "text-2xl font-semibold text-indigo-800",
                children: t,
              }),
              Object(u.jsx)("p", {
                className: "text-justify text-md pt-4 text-gray-600 ",
                children: c,
              }),
            ],
          });
        },
        f = (c(67), c.p + "static/media/4.03d3ab60.jpg"),
        g = function () {
          return Object(u.jsxs)("div", {
            className: "bg-indigo-200",
            children: [
              Object(u.jsx)("div", {
                className: "login-page-banner text-white",
                children: Object(u.jsx)(O, {
                  title: "About Us",
                  content:
                    "TIME ZONE is a very reputed and popular name for world class watches and writing instruments in Bangladesh. ",
                }),
              }),
              Object(u.jsx)("div", {
                className: "container m-auto full-width-all py-24 px-2",
                children: Object(u.jsxs)("div", {
                  className: " ",
                  children: [
                    Object(u.jsxs)("div", {
                      className:
                        "py-16 shadow-xl  bg-white mb-24 p-4 rounded-lg",
                      children: [
                        Object(u.jsx)("h1", {
                          className: "text-4xl font-semibold text-indigo-900 ",
                          children: "  Fashion Zone Watch Company LTD.",
                        }),
                        Object(u.jsxs)("p", {
                          className: "text-gray-600 mt-8",
                          children: [
                            "We provide international  products &  many other services. We cater to a wide range of needs including Leisure & Business travel. Having a wide network around the world we provide holiday packages to 100+ destinations.",
                            Object(u.jsx)("br", {}),
                            Object(u.jsx)("br", {}),
                            "Watches World Limited, a retail and a distribution house, with this concept started its journey in the year 2012 as a small entity in this country under one of the biggest conglomerates to be the sole enterprises to cater the world famous BRANDS of watches and accessories for easy access to the residents and citizen of Bangladesh.",
                          ],
                        }),
                      ],
                    }),
                    Object(u.jsxs)("div", {
                      children: [
                        Object(u.jsxs)("div", {
                          className:
                            "shadow-xl  bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4  rounded-lg",
                          children: [
                            Object(u.jsxs)("div", {
                              className: "pb-24 pt-16 p-4 lg:col-span-7 ",
                              children: [
                                Object(u.jsx)("h1", {
                                  className:
                                    "text-4xl mb-8 font-semibold text-indigo-900 ",
                                  children: "Time will make your life...",
                                }),
                                Object(u.jsxs)("p", {
                                  className: "text-justify   text-gray-600 ",
                                  children: [
                                    "   TIME ZONE is a very reputed and popular name for world class watches and writing instruments in Bangladesh.",
                                    Object(u.jsx)("br", {}),
                                    Object(u.jsx)("br", {}),
                                    "Watches World Limited, a retail and a distribution house, with this concept started its journey in the year 2012 as a small entity in this country under one of the biggest conglomerates to be the sole enterprises to cater the world famous BRANDS of watches and accessories for easy access to the residents and citizen of Bangladesh.",
                                  ],
                                }),
                              ],
                            }),
                            Object(u.jsx)("div", {
                              className: " lg:col-span-5",
                              children: Object(u.jsx)("img", {
                                className: "w-full rounded-bl-3xl",
                                src: f,
                                alt: "",
                              }),
                            }),
                          ],
                        }),
                        Object(u.jsxs)("div", {
                          className: "my-24",
                          children: [
                            Object(u.jsx)("h1", {
                              className:
                                "text-4xl mb-8 text-center font-semibold text-indigo-900 ",
                              children: "Our Values",
                            }),
                            Object(u.jsxs)("div", {
                              className:
                                "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                              children: [
                                Object(u.jsx)(p, {
                                  title: "Best Guide",
                                  desc: "We give you the subspecialty training focusing on a particular area of the fields, these training programs are called fellowships, and are one to two years.",
                                }),
                                Object(u.jsx)(p, {
                                  title: "Package Offer",
                                  desc: "We provide you the best prices package. Analyzing the radon or radon progeny concentrations calibrating radon or radon progeny measurement devices.",
                                }),
                                Object(u.jsx)(p, {
                                  title: " Money-Back Guranty",
                                  desc: "For people requiring additional follow up, the we provides rapid access to professionals specialized in Traveling and treating places.",
                                }),
                                Object(u.jsx)(p, {
                                  title: "After Services",
                                  desc: "We make the  bridge between science and nature. And we make it. Also it underpins every aspect of travel care, from  testing and treatment.  ",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(u.jsxs)("div", {
                          className:
                            "shadow-xl  bg-white grid grid-cols-12  items-center about-bottom-banner border border-white",
                          children: [
                            Object(u.jsxs)("div", {
                              className:
                                "sm:ml-8 pb-24 pt-16 col-span-12 sm:col-span-8 py-4 px-2",
                              children: [
                                Object(u.jsx)("h1", {
                                  className:
                                    "text-3xl mb-8 font-semibold text-white ",
                                  children:
                                    "The better we do, the more good we can do.",
                                }),
                                Object(u.jsxs)("p", {
                                  className: "text-justify   text-white ",
                                  children: [
                                    "Alison was founded in Galway, Ireland, in 2007 and has grown organically to become a major force in free online education and skills training. Today, with more than 20 million learners in 195 countries, Alison is changing how the world learns and up-skills.",
                                    Object(u.jsx)("br", {}),
                                    Object(u.jsx)("br", {}),
                                    "We are committed to equality and access to education and skills training irrespective of gender, geography, economic status or any other barriers that can so often stunt potential. So we offer a range of free courses that meet the many diverse needs of our learners. The UN declared in Article 26 of the 1946 Declaration of Human Rights that \u201cEducation shall be free\u2026\u201d. This statement will always inspire us.",
                                    Object(u.jsx)("br", {}),
                                    Object(u.jsx)("br", {}),
                                    "Alison was founded by Alison CEO, Mike Feerick. Mike is a businessman, but one with a difference. He believes in social impact, and that you can build a financially successful business focused on meeting a huge global social need, making education and skills training more accessible for everyone. He invites anyone who believes that too, to support the Alison mission.",
                                    Object(u.jsx)("br", {}),
                                    Object(u.jsx)("br", {}),
                                    "Alison is free of charge to you. But it\u2019s still a business \u2013 albeit a socially-focused one. We are a social enterprise making our money through advertising, merchandise, and the sale of Certificates and Diplomas, should a graduate choose to buy one.",
                                  ],
                                }),
                              ],
                            }),
                            Object(u.jsx)("div", {
                              className: "sm:col-span-4",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        v =
          (c(68),
          function () {
            return Object(u.jsxs)("div", {
              children: [
                Object(u.jsx)("div", {
                  className: "cotanct-bottom-banner text-white",
                  children: Object(u.jsx)(O, {
                    title: "Contact Us",
                    content:
                      "Conantc us for emergency services or Your Valuable Feedback",
                  }),
                }),
                Object(u.jsx)("div", {
                  className:
                    "py-12 md:py-16 lg:py-24 container full-width-all m-auto",
                  children: Object(u.jsxs)("div", {
                    className: "grid grid-cols-12 gap-8 px-2 ",
                    children: [
                      Object(u.jsxs)("div", {
                        className: "col-span-12 md:col-span-4",
                        children: [
                          Object(u.jsx)("div", {
                            children: Object(u.jsx)("img", {
                              className: "w-full",
                              src: f,
                              alt: "",
                            }),
                          }),
                          Object(u.jsxs)("div", {
                            className:
                              "border-b-2 py-6 flex justify-start  items-center",
                            children: [
                              Object(u.jsx)("i", {
                                class:
                                  "fas fa-phone-alt text-indigo-500 text-4xl mr-4",
                              }),
                              Object(u.jsxs)("div", {
                                className: "text-gray-500",
                                children: [
                                  Object(u.jsx)("h3", {
                                    className: "font-bold",
                                    children: "CALL US ANYTIME",
                                  }),
                                  Object(u.jsx)("h3", {
                                    children: "+8801712365764",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(u.jsxs)("div", {
                            className:
                              "border-b-2 py-6 flex justify-start  items-center",
                            children: [
                              Object(u.jsx)("i", {
                                class:
                                  "fas fa-map-marker-alt text-indigo-500 text-4xl mr-4",
                              }),
                              Object(u.jsxs)("div", {
                                className: "text-gray-500",
                                children: [
                                  Object(u.jsx)("h3", {
                                    className: "font-bold",
                                    children: " VISIT US ANYTIME",
                                  }),
                                  Object(u.jsx)("h3", {
                                    children: "27/4 NewTola,KishoreGanj,Dhaka",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(u.jsxs)("div", {
                            className:
                              "border-b-2 py-6 flex justify-start  items-center",
                            children: [
                              Object(u.jsx)("i", {
                                class:
                                  "far fa-calendar-check text-indigo-500 text-4xl mr-4",
                              }),
                              Object(u.jsx)("div", {
                                className: "text-gray-500",
                                children: Object(u.jsx)(a.c, {
                                  to: "/appointment",
                                  children: Object(u.jsx)("h3", {
                                    className: "cursor-pointer font-bold",
                                    children: "EMERGENCY BOOKING",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(u.jsx)("div", {
                        className:
                          "col-span-12 md:col-span-8 bg-indigo-200 rounded-xl shadow-2xl",
                        children: Object(u.jsxs)("div", {
                          className: " p-8 m-auto",
                          children: [
                            Object(u.jsx)("h1", {
                              className: "text-2xl pb-4",
                              children: "Leave us a feadback",
                            }),
                            Object(u.jsx)("hr", {
                              className: "border border-gray-500 w-2/4",
                            }),
                            Object(u.jsxs)("form", {
                              children: [
                                Object(u.jsxs)("div", {
                                  className: "grid sm:grid-cols-2 gap-x-8 mt-8",
                                  children: [
                                    Object(u.jsxs)("div", {
                                      className: "mb-4",
                                      children: [
                                        Object(u.jsx)("label", {
                                          htmlFor: "name",
                                          className: "text-gray-500 ",
                                          children: " Your Name",
                                        }),
                                        Object(u.jsx)("br", {}),
                                        Object(u.jsx)("input", {
                                          type: "text",
                                          id: "name",
                                          required: !0,
                                          className:
                                            "bg-white py-2 px-2 w-full rounded-2xl mt-2",
                                        }),
                                      ],
                                    }),
                                    Object(u.jsxs)("div", {
                                      className: "mb-4",
                                      children: [
                                        Object(u.jsx)("label", {
                                          htmlFor: "email",
                                          className: "text-gray-500 ",
                                          children: " Your Email",
                                        }),
                                        Object(u.jsx)("br", {}),
                                        Object(u.jsx)("input", {
                                          type: "email",
                                          id: "email",
                                          required: !0,
                                          className:
                                            "bg-white py-2 px-2 w-full rounded-2xl mt-2",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(u.jsxs)("div", {
                                  className: "mb-4",
                                  children: [
                                    Object(u.jsx)("label", {
                                      htmlFor: "doctor",
                                      className: "text-gray-500 ",
                                      children: " Subject",
                                    }),
                                    Object(u.jsx)("br", {}),
                                    Object(u.jsx)("input", {
                                      type: "text",
                                      id: "doctor",
                                      required: !0,
                                      className:
                                        "bg-white py-2 px-2 w-full rounded-2xl mt-2",
                                    }),
                                  ],
                                }),
                                Object(u.jsxs)("div", {
                                  className: "mb-4",
                                  children: [
                                    Object(u.jsx)("label", {
                                      htmlFor: "message",
                                      required: !0,
                                      className: "text-gray-500 ",
                                      children: " Your Message",
                                    }),
                                    Object(u.jsx)("br", {}),
                                    Object(u.jsx)("textarea", {
                                      className:
                                        "bg-white py-2 px-2 w-full rounded-2xl mt-2",
                                      name: "",
                                      id: "message",
                                      cols: "30",
                                      rows: "4",
                                    }),
                                  ],
                                }),
                                Object(u.jsx)("div", {
                                  className: "text-center pt-4",
                                  children: Object(u.jsx)("button", {
                                    className:
                                      "rounded-full py-2 px-4 border text-indigo-900 text-lg font-semibold border-indigo-900 hover:bg-indigo-900 hover:text-white transition duration-500 ease-in-out ",
                                    children: "Send Message",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            });
          }),
        A = c(1),
        N = c.n(A),
        w = c(4),
        y = c(15),
        k = function () {
          var e = Object(s.useState)({ InStock: !0 }),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1],
            n = Object(s.useState)([]),
            r = Object(d.a)(n, 2),
            a = r[0],
            l = r[1],
            o = Object(s.useState)(null),
            j = Object(d.a)(o, 2),
            b = j[0],
            x = j[1],
            h = Object(s.useState)(""),
            m = Object(d.a)(h, 2),
            O = (m[0], m[1]),
            p = function (e) {
              var t = e.target.name,
                s = e.target.value,
                n = Object(y.a)({}, c);
              (n[t] = s), i(n);
            },
            f = Object(s.useRef)(""),
            g = Object(s.useRef)(""),
            v = Object(s.useRef)(""),
            A = Object(s.useRef)(""),
            k = Object(s.useRef)(""),
            P = Object(s.useRef)(""),
            S = Object(s.useRef)("");
          Object(s.useRef)("");
          Object(s.useEffect)(function () {
            return [
              fetch("http://localhost:5000/allBrands")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return l(e);
                }),
            ];
          }, []);
          var C = (function () {
              var e = Object(w.a)(
                N.a.mark(function e(t) {
                  var c, s, i, n;
                  return N.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              "82ec2763f04d19d197f1451e6935abfe",
                              (c = new FormData()).append("image", t),
                              (e.prev = 3),
                              (e.next = 6),
                              fetch(
                                "https://api.imgbb.com/1/upload?key=82ec2763f04d19d197f1451e6935abfe",
                                { method: "POST", body: c }
                              )
                            );
                          case 6:
                            return (s = e.sent), (e.next = 9), s.json();
                          case 9:
                            if (200 !== (i = e.sent).status) {
                              e.next = 16;
                              break;
                            }
                            return (
                              (n = i.data.url), O(n), e.abrupt("return", n)
                            );
                          case 16:
                            return (
                              console.error("Image upload failed"),
                              e.abrupt("return", null)
                            );
                          case 18:
                            e.next = 24;
                            break;
                          case 20:
                            return (
                              (e.prev = 20),
                              (e.t0 = e.catch(3)),
                              console.error("Error uploading image: ", e.t0),
                              e.abrupt("return", null)
                            );
                          case 24:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 20]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            E = (function () {
              var e = Object(w.a)(
                N.a.mark(function e(t) {
                  var s, i;
                  return N.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return t.preventDefault(), (e.next = 3), C(b);
                        case 3:
                          (s = e.sent),
                            console.log(s),
                            (i = Object(y.a)(
                              Object(y.a)({}, c),
                              {},
                              { img: s }
                            )),
                            console.log(i),
                            fetch("http://localhost:5000/products", {
                              method: "POST",
                              headers: { "content-type": "application/json" },
                              body: JSON.stringify(i),
                            })
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                e.insertedId && alert("success");
                              }),
                            t.preventDefault();
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(u.jsx)("div", {
            children: Object(u.jsx)("div", {
              className: "bg-blue-100 py-24 rounded-lg",
              children: Object(u.jsxs)("div", {
                className: "m-auto container full-width-all m-auto",
                children: [
                  Object(u.jsx)("h2", {
                    className: "text-center text-3xl",
                    children: " Add a new Product ",
                  }),
                  Object(u.jsx)("div", {
                    className: "m-auto md:w-8/12 px-2",
                    children: Object(u.jsxs)("form", {
                      onSubmit: E,
                      className: "register-form mt-6",
                      children: [
                        Object(u.jsx)("div", {
                          children: Object(u.jsxs)("select", {
                            required: !0,
                            className: "py-2 px-4 w-full text-lg  rounded-md ",
                            name: "Category",
                            onBlur: p,
                            ref: f,
                            children: [
                              Object(u.jsx)("option", {
                                className: "",
                                value: "",
                                disabled: !0,
                                selected: !0,
                                children: "Select Product Category ",
                              }),
                              a.map(function (e, t) {
                                return Object(u.jsxs)(
                                  "option",
                                  {
                                    children: [
                                      "   ",
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.brandName,
                                    ],
                                  },
                                  t
                                );
                              }),
                            ],
                          }),
                        }),
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("div", {
                          children: Object(u.jsx)("input", {
                            required: !0,
                            className: "py-2 px-4 w-full text-lg  rounded-md ",
                            name: "productName",
                            type: "text",
                            onBlur: p,
                            ref: A,
                            placeholder: "Product Name",
                          }),
                        }),
                        " ",
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("div", {
                          children: Object(u.jsx)("input", {
                            required: !0,
                            className: "py-2 px-4 w-full text-lg  rounded-md",
                            name: "price",
                            type: "number",
                            step: "0.01",
                            onBlur: p,
                            ref: k,
                            placeholder: "Price",
                          }),
                        }),
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("div", {
                          children: Object(u.jsx)("input", {
                            required: !0,
                            className: "py-2 px-4 w-full text-lg  rounded-md",
                            name: "rating",
                            type: "number",
                            onBlur: p,
                            ref: P,
                            placeholder: "Product rating ( 0 - 5 )",
                            step: "0.01",
                            min: "0",
                            max: "5",
                          }),
                        }),
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("div", {
                          children: Object(u.jsxs)("select", {
                            required: !0,
                            className: "py-2 px-4 w-full text-lg  rounded-md ",
                            name: "Gender",
                            onBlur: p,
                            ref: g,
                            children: [
                              Object(u.jsx)("option", {
                                value: "",
                                disabled: !0,
                                selected: !0,
                                children: "Gender ",
                              }),
                              Object(u.jsx)("option", { children: " Male" }),
                              Object(u.jsx)("option", { children: " Female" }),
                              Object(u.jsx)("option", {
                                children: " Male & Female",
                              }),
                            ],
                          }),
                        }),
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("div", {
                          children: Object(u.jsx)("input", {
                            required: !0,
                            className: "py-2 px-4 w-full text-lg  rounded-md",
                            name: "color",
                            type: "text",
                            onBlur: p,
                            ref: S,
                            placeholder: "Product color",
                          }),
                        }),
                        " ",
                        Object(u.jsx)("br", {}),
                        Object(u.jsxs)("div", {
                          className: "w-1/2",
                          children: [
                            Object(u.jsx)("label", {
                              className: " text-gray-600 font-semibold block  ",
                              for: "image",
                              children: "Image",
                            }),
                            Object(u.jsx)("input", {
                              type: "file",
                              required: !0,
                              accept: "image/*",
                              id: "image",
                              onChange: function (e) {
                                return x(e.target.files[0]);
                              },
                            }),
                          ],
                        }),
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("div", {
                          children: Object(u.jsx)("input", {
                            required: !0,
                            className: "py-2 px-4 w-full text-lg  rounded-md",
                            name: "description",
                            type: "text",
                            step: "0.01",
                            onBlur: p,
                            ref: v,
                            placeholder: "Description",
                          }),
                        }),
                        " ",
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("div", {
                          children: Object(u.jsx)("input", {
                            className:
                              "py-2 px-4  text-white rounded-md bg-indigo-900 cursor-pointer hover:bg-indigo-800",
                            type: "submit",
                            value: "Add Service",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        P = function () {
          return Object(s.useContext)(h);
        },
        S = c.p + "static/media/pro1.5f3d49ab.png",
        C = c(43),
        E = ["children"],
        B = function (e) {
          var t = e.children,
            c = Object(C.a)(e, E),
            s = P(),
            i = s.user,
            n = s.admin,
            r = s.isLoading;
          return r
            ? "Loading for admin ..."
            : n
            ? (console.log(n),
              console.log(r),
              Object(u.jsx)(
                l.b,
                Object(y.a)(
                  Object(y.a)({}, c),
                  {},
                  {
                    render: function (e) {
                      var c = e.location;
                      return i.email && n
                        ? t
                        : Object(u.jsx)(l.a, {
                            to: { pathname: "/login", state: { from: c } },
                          });
                    },
                  }
                )
              ))
            : "Loading for admin ...";
        },
        L = c(3),
        T = c.p + "static/media/blue.fb217692.gif",
        D = function () {
          var e = Object(s.useState)(!1),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1],
            n = Object(s.useState)({ brandName: "" }),
            r = Object(d.a)(n, 2),
            a = r[0],
            l = r[1],
            o = (function () {
              var e = Object(w.a)(
                N.a.mark(function e(t) {
                  return N.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            i(!0),
                            fetch(" http://localhost:5000/addbrands", {
                              method: "POST",
                              headers: { "content-type": "application/json" },
                              body: JSON.stringify(a),
                            })
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                e.insertedId && l({ brandName: "" }),
                                  i(!1),
                                  e.error && l({ brandName: "" });
                              });
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(u.jsx)("div", {
            className: " min-h-screen",
            children: Object(u.jsx)("div", {
              className: "full-width-all pt-4  pb-24 ",
              children: Object(u.jsx)("div", {
                className: "w-full md:2/4 lg:w-2/4 m-auto pt-12",
                children: Object(u.jsx)("div", {
                  className: " ",
                  children: Object(u.jsxs)("div", {
                    className: " ",
                    children: [
                      Object(u.jsx)("div", {
                        className:
                          " border shadow-md shadow-blue-300 px-2 py-6 md:p-8 text-center rounded-md",
                        children: Object(u.jsx)("h2", {
                          className: "text-2xl font-bold text-blue-700",
                          children: "Add Category",
                        }),
                      }),
                      Object(u.jsx)("div", {
                        className: " mt-4 ",
                        children: Object(u.jsxs)("form", {
                          className:
                            " border shadow-xl shadow-blue-300 px-2 py-6 md:p-8 rounded-md",
                          onSubmit: o,
                          children: [
                            Object(u.jsxs)("div", {
                              className: "flex flex-col w-full",
                              children: [
                                Object(u.jsx)("label", {
                                  className:
                                    " text-gray-600 font-semibold block ",
                                  htmlFor: "brandName",
                                  children: "Name",
                                }),
                                Object(u.jsx)("input", {
                                  className:
                                    "py-1 px-2 rounded-md border border-gray-300",
                                  type: "text",
                                  name: "brandName",
                                  placeholder: "Category Name",
                                  value: a.brandName,
                                  onChange: function (e) {
                                    l(
                                      Object(y.a)(
                                        Object(y.a)({}, a),
                                        {},
                                        Object(L.a)(
                                          {},
                                          e.target.name,
                                          e.target.value
                                        )
                                      )
                                    );
                                  },
                                }),
                              ],
                            }),
                            Object(u.jsx)("div", {
                              className: " mt-4 ",
                              children: Object(u.jsxs)("div", {
                                className:
                                  "flex items-center justify-center h-10  bg-indigo-500 rounded",
                                children: [
                                  Object(u.jsx)("button", {
                                    className: " ",
                                    children: Object(u.jsx)("img", {
                                      className:
                                        "w-8 text-center  mx-auto ".concat(
                                          !c && "hidden"
                                        ),
                                      src: T,
                                      alt: "",
                                    }),
                                  }),
                                  Object(u.jsx)("button", {
                                    className:
                                      "w-full h-full  text-white py-18 ".concat(
                                        c && "hidden"
                                      ),
                                    children: Object(u.jsx)("span", {
                                      children: "Add Category",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        W = function () {
          var e = P().user;
          return Object(u.jsxs)("div", {
            children: [
              Object(u.jsx)("div", {
                children: Object(u.jsx)("h1", {
                  className: "text-indigo-900 font-semibold text-4xl mb-6 ml-4",
                  children: "Admin Profile",
                }),
              }),
              Object(u.jsx)("hr", {}),
              Object(u.jsxs)("div", {
                className: "md:flex py-8 md:pl-8",
                children: [
                  Object(u.jsx)("div", {
                    className: "mr-3 md:mr-8",
                    children: Object(u.jsxs)("div", {
                      children: [
                        Object(u.jsx)("img", {
                          className: "w-36 rounded-full block mx-auto",
                          src: null === e.photoURL ? S : e.photoURL,
                          alt: "",
                        }),
                        Object(u.jsx)("button", {
                          className:
                            "py-2 px-6 mt-6 bg-indigo-900 text-white rounded-full block mx-auto my-4 hover:bg-indigo-800",
                          children: "Edit Profile",
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsxs)("div", {
                    children: [
                      Object(u.jsxs)("div", {
                        className: "my-6",
                        children: [
                          Object(u.jsx)("p", {
                            className: "text-gray-600 ",
                            children: "Full Name",
                          }),
                          Object(u.jsx)("h1", {
                            className: "text-indigo-900 font-semibold text-2xl",
                            children: e.displayName,
                          }),
                        ],
                      }),
                      Object(u.jsxs)("div", {
                        children: [
                          Object(u.jsx)("p", {
                            className: "text-gray-600 ",
                            children: "Email",
                          }),
                          Object(u.jsx)("h1", {
                            className: "text-indigo-900 font-semibold text-2xl",
                            children: e.email,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        X = function () {
          var e = Object(s.useState)(""),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1],
            n = Object(s.useState)([]),
            r = Object(d.a)(n, 2),
            a = r[0],
            l = r[1],
            o = Object(s.useState)(0),
            j = Object(d.a)(o, 2),
            b = j[0],
            x = j[1];
          Object(s.useEffect)(
            function () {
              fetch("http://localhost:5000/users")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return l(e);
                });
            },
            [b]
          );
          return Object(u.jsxs)("div", {
            children: [
              Object(u.jsx)("div", {
                children: Object(u.jsx)("h1", {
                  className: "text-indigo-900 font-semibold text-4xl mb-6 ml-4",
                  children: "Admin Role",
                }),
              }),
              Object(u.jsx)("hr", {}),
              Object(u.jsx)("div", {
                className: "ml-4 my-8",
                children: Object(u.jsxs)("form", {
                  onSubmit: function (e) {
                    var t = { admin: c };
                    fetch("http://localhost:5000/users/admin", {
                      method: "PUT",
                      headers: { "content-type": "application/json" },
                      body: JSON.stringify(t),
                    })
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (e) {
                        e.modifiedCount && (alert("success"), x(b + 1));
                      }),
                      e.preventDefault();
                  },
                  children: [
                    Object(u.jsx)("label", {
                      for: "email",
                      children: "New Admin Email",
                    }),
                    Object(u.jsx)("br", {}),
                    Object(u.jsx)("input", {
                      onBlur: function (e) {
                        i(e.target.value);
                      },
                      className:
                        "bg-gray-300 text-xl py-2 px-4 rounded-lg my-4 w-3/4",
                      type: "email",
                      name: "email",
                      id: "email",
                    }),
                    Object(u.jsx)("br", {}),
                    Object(u.jsx)("input", {
                      value: "Make Admin",
                      type: "submit",
                      className:
                        "bg-indigo-800 hover:bg-indigo-900 py-2 px-4 text-white rounded-lg",
                    }),
                  ],
                }),
              }),
              Object(u.jsxs)("div", {
                className: "mt-12",
                children: [
                  Object(u.jsx)("h1", {
                    className:
                      "text-indigo-900 font-semibold text-xl mb-6 ml-4 ",
                    children: "Admin List",
                  }),
                  Object(u.jsx)("hr", {}),
                  Object(u.jsx)("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8",
                    children: a.map(function (e) {
                      return Object(u.jsx)("div", {
                        className: "my-2 ",
                        children: Object(u.jsx)("div", {
                          className: "shadow-2xl bg-indigo-200 p-3 rounded-lg",
                          children: Object(u.jsxs)("div", {
                            children: [
                              Object(u.jsxs)("h1", {
                                children: ["Name : ", e.name],
                              }),
                              Object(u.jsxs)("h1", {
                                children: ["Email : ", e.email],
                              }),
                            ],
                          }),
                        }),
                      });
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        q = c(23),
        R = c.n(q),
        M = c.p + "static/media/9.fb217692.gif",
        Y = function () {
          var e = Object(s.useState)([]),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1],
            n = Object(s.useState)(0),
            r = Object(d.a)(n, 2),
            a = r[0],
            l = r[1];
          Object(s.useEffect)(
            function () {
              return [
                fetch("http://localhost:5000/orders")
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return i(e);
                  }),
              ];
            },
            [a]
          );
          return Object(u.jsx)("div", {
            className: "py-16 px-2",
            children: Object(u.jsxs)("div", {
              className: " ",
              children: [
                Object(u.jsx)("h1", {
                  className:
                    "text-center text-2xl text-indigo-900 font-semibold mb-12",
                  children:
                    "You can Delete,Edit or Approve users all orders from here",
                }),
                c.length
                  ? Object(u.jsx)("div", {
                      children: c.length
                        ? Object(u.jsx)("div", {
                            className:
                              "grid md:grid-cols-2 xl:grid-cols-4 gap-6",
                            children: c.map(function (e) {
                              return Object(u.jsx)(
                                "div",
                                {
                                  children: Object(u.jsxs)("div", {
                                    className: e.status
                                      ? "shadow-2xl bg-indigo-200 p-4 text-sm rounded-lg"
                                      : "shadow-2xl bg-red-200 p-4 text-sm rounded-lg",
                                    children: [
                                      Object(u.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [
                                          Object(u.jsxs)("div", {
                                            children: [
                                              Object(u.jsxs)("p", {
                                                className:
                                                  "font-semibold text-base",
                                                children: [
                                                  " ",
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.productName,
                                                ],
                                              }),
                                              Object(u.jsxs)("p", {
                                                children: [
                                                  " ",
                                                  Object(u.jsx)("span", {
                                                    className: "text-pink-800",
                                                    children: e._id,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          Object(u.jsx)("div", {
                                            className:
                                              "flex justify-between items-center",
                                            children:
                                              !e.status &&
                                              Object(u.jsx)("button", {
                                                className:
                                                  "bg-pink-500 py-2 px-4 rounded-lg text-white ",
                                                children: "Pending",
                                              }),
                                          }),
                                        ],
                                      }),
                                      Object(u.jsx)("hr", {
                                        className: "my-2",
                                      }),
                                      Object(u.jsx)("div", {
                                        children: Object(u.jsxs)("p", {
                                          children: [
                                            " Email : ",
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.email,
                                          ],
                                        }),
                                      }),
                                      Object(u.jsx)("div", {
                                        children: Object(u.jsxs)("p", {
                                          children: [
                                            " Quentity : ",
                                            Object(u.jsx)("span", {
                                              className:
                                                "text-pink-800 text-xl",
                                              children:
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.quantity,
                                            }),
                                          ],
                                        }),
                                      }),
                                      Object(u.jsx)("div", {
                                        children: Object(u.jsxs)("p", {
                                          children: [
                                            " Total Price : ",
                                            Object(u.jsx)("span", {
                                              className:
                                                "text-pink-800 text-xl",
                                              children:
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.totalPrice,
                                            }),
                                          ],
                                        }),
                                      }),
                                      Object(u.jsxs)("div", {
                                        className:
                                          "flex justify-between mt-2 items-center",
                                        children: [
                                          !e.status &&
                                            Object(u.jsx)("button", {
                                              className:
                                                "bg-green-800 py-2 px-4 rounded-lg text-white hover:bg-green-600 ",
                                              onClick: function () {
                                                return (function (e) {
                                                  var t =
                                                    "http://localhost:5000/orders/".concat(
                                                      e
                                                    );
                                                  fetch(t, {
                                                    method: "PUT",
                                                    headers: {
                                                      "content-type":
                                                        "application/json",
                                                    },
                                                    body: JSON.stringify(),
                                                  })
                                                    .then(function (e) {
                                                      return e.json();
                                                    })
                                                    .then(function (e) {
                                                      e.modifiedCount > 0 &&
                                                        (R()(
                                                          "Order Updated",
                                                          "",
                                                          "success",
                                                          { button: "Ok" }
                                                        ),
                                                        l(a + 1));
                                                    });
                                                })(e._id);
                                              },
                                              children: "Approve ",
                                            }),
                                          Object(u.jsx)("button", {
                                            className: e.status
                                              ? "bg-red-800 hover:bg-red-600 py-2 px-4 rounded-lg text-white  w-full"
                                              : "bg-red-800 py-2 px-4 rounded-lg text-white hover:bg-red-600",
                                            onClick: function () {
                                              return (function (e) {
                                                if (
                                                  window.confirm(
                                                    "Are you sure, You want to delete it?"
                                                  )
                                                ) {
                                                  var t =
                                                    "http://localhost:5000/orders/".concat(
                                                      e
                                                    );
                                                  fetch(t, { method: "DELETE" })
                                                    .then(function (e) {
                                                      return e.json();
                                                    })
                                                    .then(function (t) {
                                                      if (t.deletedCount > 0) {
                                                        R()(
                                                          "Successfully deleted Order.",
                                                          " ",
                                                          "success",
                                                          { button: "Ok" }
                                                        );
                                                        var s = c.filter(
                                                          function (t) {
                                                            return t._id !== e;
                                                          }
                                                        );
                                                        i(s);
                                                      }
                                                    });
                                                }
                                              })(e._id);
                                            },
                                            children: "Delete Order",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                e._id
                              );
                            }),
                          })
                        : Object(u.jsx)("div", {
                            children: Object(u.jsx)("img", {
                              className: "m-auto w-20 mt-24 block",
                              src: M,
                              alt: "",
                            }),
                          }),
                    })
                  : Object(u.jsx)("div", {
                      children: Object(u.jsx)("h1", {
                        className:
                          "text-center text-2xl text-indigo-900 font-semibold mb-12",
                        children: "Opps! There are no Any Orders Yet. ",
                      }),
                    }),
              ],
            }),
          });
        },
        z = function () {
          var e = Object(s.useState)([]),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1],
            n = Object(s.useState)(0),
            r = Object(d.a)(n, 2),
            a = r[0],
            l = r[1];
          Object(s.useEffect)(
            function () {
              return [
                fetch("http://localhost:5000/products")
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return i(e.products);
                  }),
              ];
            },
            [a]
          );
          return Object(u.jsx)("div", {
            className: "py-16",
            children: Object(u.jsx)("div", {
              className: "m-auto ",
              children: c.length
                ? Object(u.jsx)("div", {
                    className:
                      "grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 md:gap-x-8 gap-y-8 ",
                    children: c.map(function (e) {
                      return Object(u.jsx)(
                        "div",
                        {
                          children: Object(u.jsx)("div", {
                            className: "",
                            children: Object(u.jsxs)("div", {
                              className: (
                                null === e || void 0 === e ? void 0 : e.InStock
                              )
                                ? "shadow-xl bg-white rounded hover:shadow-2xl p-2 border"
                                : "bg-red-200 shadow-xl bg-white rounded hover:shadow-2xl p-2 border",
                              children: [
                                Object(u.jsxs)("div", {
                                  className: "flex",
                                  children: [
                                    Object(u.jsx)("div", {
                                      className: "",
                                      children: Object(u.jsx)("img", {
                                        className: "rounded w-28",
                                        src:
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.img,
                                        style: {
                                          height: "112px",
                                          width: "120px",
                                        },
                                        alt: "",
                                      }),
                                    }),
                                    Object(u.jsxs)("div", {
                                      children: [
                                        Object(u.jsxs)("div", {
                                          className: "ml-1",
                                          children: [
                                            Object(u.jsx)("h1", {
                                              className:
                                                "text-indigo-900 font-bold text-xl",
                                              children:
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.productName,
                                            }),
                                            Object(u.jsx)("p", {
                                              className: "text-gray-400  ",
                                              children:
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.model,
                                            }),
                                          ],
                                        }),
                                        (
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.InStock
                                        )
                                          ? Object(u.jsxs)("div", {
                                              className:
                                                "flex justify-between mt-2",
                                              children: [
                                                Object(u.jsx)("div", {
                                                  className: "",
                                                }),
                                                Object(u.jsx)("div", {
                                                  className: "text-gray-500",
                                                }),
                                              ],
                                            })
                                          : Object(u.jsx)("div", {
                                              children: Object(u.jsx)("h1", {
                                                className:
                                                  "text-red-800 font-bold  ml-1 text-lg",
                                                children: " Stock Out!",
                                              }),
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(u.jsx)("div", {
                                  className: "p-3",
                                  children: Object(u.jsxs)("div", {
                                    className:
                                      "flex pt-4 justify-between text-white",
                                    children: [
                                      Object(u.jsx)("button", {
                                        className:
                                          "bg-indigo-900 hover:bg-indigo-800 text-sm px-3 py-2 rounded-lg",
                                        onClick: function () {
                                          return (function (e) {
                                            if (
                                              window.confirm(
                                                "Are you sure, You want to delete it?"
                                              )
                                            ) {
                                              var t =
                                                "http://localhost:5000/products/".concat(
                                                  e
                                                );
                                              console.log(t),
                                                fetch(t, { method: "DELETE" })
                                                  .then(function (e) {
                                                    return e.json();
                                                  })
                                                  .then(function (t) {
                                                    if (t.deletedCount > 0) {
                                                      alert(
                                                        "Successfully delete the data."
                                                      );
                                                      var s = c.filter(
                                                        function (t) {
                                                          return t._id !== e;
                                                        }
                                                      );
                                                      i(s);
                                                    }
                                                  });
                                            }
                                          })(
                                            null === e || void 0 === e
                                              ? void 0
                                              : e._id
                                          );
                                        },
                                        children: "Delete",
                                      }),
                                      (
                                        null === e || void 0 === e
                                          ? void 0
                                          : e.InStock
                                      )
                                        ? Object(u.jsx)("button", {
                                            className:
                                              "bg-indigo-900 hover:bg-indigo-800 text-sm px-2 py-1 rounded-lg",
                                            onClick: function () {
                                              return (function (e) {
                                                if (
                                                  window.confirm(
                                                    "Are you sure, You want to Stock Out this Product?"
                                                  )
                                                ) {
                                                  var t =
                                                    "http://localhost:5000/products/".concat(
                                                      e
                                                    );
                                                  fetch(t, {
                                                    method: "PUT",
                                                    headers: {
                                                      "content-type":
                                                        "application/json",
                                                    },
                                                    body: JSON.stringify({
                                                      InStock: !1,
                                                    }),
                                                  })
                                                    .then(function (e) {
                                                      return e.json();
                                                    })
                                                    .then(function (e) {
                                                      e.modifiedCount > 0 &&
                                                        (alert(
                                                          "Update Successful."
                                                        ),
                                                        l(a + 1));
                                                    });
                                                }
                                              })(e._id);
                                            },
                                            children: "Out of Stock",
                                          })
                                        : Object(u.jsx)("button", {
                                            className:
                                              "bg-indigo-900 hover:bg-indigo-800 text-sm px-2 py-1 rounded-lg",
                                            onClick: function () {
                                              return (function (e) {
                                                if (
                                                  window.confirm(
                                                    "Are you sure, You want to Stock in this Product?"
                                                  )
                                                ) {
                                                  var t = { InStock: !0 },
                                                    c =
                                                      "http://localhost:5000/products/".concat(
                                                        e
                                                      );
                                                  console.log(c, t),
                                                    fetch(c, {
                                                      method: "PUT",
                                                      headers: {
                                                        "content-type":
                                                          "application/json",
                                                      },
                                                      body: JSON.stringify(t),
                                                    })
                                                      .then(function (e) {
                                                        return e.json();
                                                      })
                                                      .then(function (e) {
                                                        e.modifiedCount > 0 &&
                                                          (alert(
                                                            "Update Successful."
                                                          ),
                                                          l(a + 1));
                                                      });
                                                }
                                              })(e._id);
                                            },
                                            children: "Stock In",
                                          }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        },
                        e._id
                      );
                    }),
                  })
                : Object(u.jsx)("div", {
                    children: Object(u.jsx)("img", {
                      className: "m-auto w-20 mt-24 block",
                      src: M,
                      alt: "",
                    }),
                  }),
            }),
          });
        },
        H = function () {
          var e = P(),
            t = e.user,
            c = e.logOut,
            s = Object(l.j)(),
            i = s.path,
            n = s.url;
          return Object(u.jsx)("div", {
            className: "py-12 px-2   mx-auto md:min-h-screen",
            children: Object(u.jsxs)("div", {
              className: "grid grid-cols-1  lg:grid-cols-12 gap-8 ",
              children: [
                Object(u.jsxs)("div", {
                  className:
                    "lg:col-span-3 xl:col-span-2 shadow-2xl text-center py-8 text-lg  text-indigo-900 font-semibold rounded-xl px-2 border",
                  children: [
                    Object(u.jsxs)("div", {
                      className: "mb-6",
                      children: [
                        Object(u.jsx)("img", {
                          className: "w-20 rounded-full block mx-auto",
                          src: null === t.photoURL ? S : t.photoURL,
                          alt: "",
                        }),
                        Object(u.jsx)("p", {
                          className: "text-2xl mt-4",
                          children: t.displayName,
                        }),
                      ],
                    }),
                    Object(u.jsx)("hr", { className: "mb-6" }),
                    Object(u.jsx)("div", {
                      children: Object(u.jsx)(a.b, {
                        className:
                          " block py-2 hover:bg-pink-800 hover:text-white rounded-lg",
                        to: "".concat(n),
                        children: "Admin Details",
                      }),
                    }),
                    Object(u.jsx)("div", {
                      children: Object(u.jsx)(a.b, {
                        className:
                          " block py-2 hover:bg-pink-800 hover:text-white rounded-lg",
                        to: "".concat(n, "/manageOrders"),
                        children: "Manage Orders",
                      }),
                    }),
                    Object(u.jsx)("div", {
                      children: Object(u.jsx)(a.b, {
                        className:
                          " block py-2 hover:bg-pink-800 hover:text-white rounded-lg",
                        to: "".concat(n, "/manageProducts"),
                        children: "Manage Products",
                      }),
                    }),
                    Object(u.jsx)("div", {
                      children: Object(u.jsx)(a.b, {
                        className:
                          " block py-2 hover:bg-pink-800 hover:text-white rounded-lg",
                        to: "".concat(n, "/addProducts"),
                        children: "Add Product",
                      }),
                    }),
                    Object(u.jsx)("div", {
                      children: Object(u.jsx)(a.b, {
                        className:
                          " block py-2 hover:bg-pink-800 hover:text-white rounded-lg",
                        to: "".concat(n, "/addBrands"),
                        children: "Add Caegory",
                      }),
                    }),
                    Object(u.jsx)("div", {
                      children: Object(u.jsx)(a.b, {
                        className:
                          " block py-2 hover:bg-pink-800 hover:text-white rounded-lg",
                        to: "".concat(n, "/makeAdmin"),
                        children: "Make Admin ",
                      }),
                    }),
                    Object(u.jsx)("div", {
                      children: Object(u.jsx)("button", {
                        className:
                          "text-indigo-900 font-semibold hover:text-indigo-700 text-white mt-3",
                        onClick: c,
                        children: "Log Out",
                      }),
                    }),
                  ],
                }),
                Object(u.jsx)("div", {
                  className:
                    "lg:col-span-9 xl:col-span-10 shadow-2xl p-4 rounded-xl border",
                  children: Object(u.jsxs)(l.d, {
                    children: [
                      Object(u.jsx)(B, {
                        exact: !0,
                        path: i,
                        children: Object(u.jsx)(W, {}),
                      }),
                      Object(u.jsx)(B, {
                        path: "".concat(i, "/manageOrders"),
                        children: Object(u.jsx)(Y, {}),
                      }),
                      Object(u.jsx)(B, {
                        path: "".concat(i, "/manageProducts"),
                        children: Object(u.jsx)(z, {}),
                      }),
                      Object(u.jsx)(B, {
                        path: "".concat(i, "/addProducts"),
                        children: Object(u.jsx)(k, {}),
                      }),
                      Object(u.jsx)(B, {
                        path: "".concat(i, "/addBrands"),
                        children: Object(u.jsx)(D, {}),
                      }),
                      Object(u.jsx)(B, {
                        path: "".concat(i, "/makeAdmin"),
                        children: Object(u.jsx)(X, {}),
                      }),
                      Object(u.jsx)(B, {
                        path: "".concat(i, "/makeAdmin"),
                        children: Object(u.jsx)(X, {}),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        K = function () {
          var e = Object(s.useState)([]),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1],
            n = P().user;
          Object(s.useEffect)(function () {
            var e = "http://localhost:5000/orders?email=".concat(n.email);
            fetch(e)
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return i(e);
              });
          }, []);
          return Object(u.jsx)("div", {
            className: "py-16",
            children: Object(u.jsxs)("div", {
              className: "full-width-all container m-auto px-2",
              children: [
                Object(u.jsx)("div", {
                  children: Object(u.jsx)("h1", {
                    className:
                      "text-left text-2xl text-indigo-900 font-semibold mb-12",
                    children: "My All Orders",
                  }),
                }),
                Object(u.jsx)("hr", {}),
                Object(u.jsx)("div", {
                  className: "min-h-screen pt-12",
                  children:
                    0 !== c.length
                      ? Object(u.jsx)("div", {
                          children: Object(u.jsx)("div", {
                            children: c.length
                              ? Object(u.jsx)("div", {
                                  className:
                                    "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                                  children: c.map(function (e) {
                                    return Object(u.jsx)(
                                      "div",
                                      {
                                        children: Object(u.jsxs)("div", {
                                          className:
                                            "shadow-2xl bg-indigo-200 p-4 text-sm rounded-lg",
                                          children: [
                                            Object(u.jsxs)("div", {
                                              className: "flex justify-between",
                                              children: [
                                                Object(u.jsxs)("div", {
                                                  children: [
                                                    Object(u.jsxs)("p", {
                                                      className:
                                                        "font-semibold text-base",
                                                      children: [
                                                        " ",
                                                        null === e ||
                                                        void 0 === e
                                                          ? void 0
                                                          : e.productName,
                                                      ],
                                                    }),
                                                    Object(u.jsxs)("p", {
                                                      children: [
                                                        "  ",
                                                        Object(u.jsx)("span", {
                                                          className:
                                                            "text-pink-800",
                                                          children: e._id,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                Object(u.jsx)("div", {
                                                  className:
                                                    "flex justify-between items-center",
                                                  children: e.status
                                                    ? Object(u.jsx)("button", {
                                                        className:
                                                          "bg-green-800 py-2 px-4 rounded-lg text-white ",
                                                        children: "Approved",
                                                      })
                                                    : Object(u.jsx)("button", {
                                                        className:
                                                          "bg-pink-500 py-2 px-4 rounded-lg text-white ",
                                                        children: "Pending",
                                                      }),
                                                }),
                                              ],
                                            }),
                                            Object(u.jsx)("hr", {
                                              className: "my-2",
                                            }),
                                            Object(u.jsx)("div", {
                                              children: Object(u.jsxs)("p", {
                                                children: [
                                                  "Name : ",
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.userName,
                                                ],
                                              }),
                                            }),
                                            Object(u.jsx)("div", {
                                              children: Object(u.jsxs)("p", {
                                                children: [
                                                  " Email : ",
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.email,
                                                ],
                                              }),
                                            }),
                                            Object(u.jsx)("div", {
                                              children: Object(u.jsxs)("p", {
                                                children: [
                                                  " Quentity : ",
                                                  Object(u.jsx)("span", {
                                                    className:
                                                      "text-pink-800 text-xl",
                                                    children:
                                                      null === e || void 0 === e
                                                        ? void 0
                                                        : e.quantity,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            Object(u.jsx)("div", {
                                              children: Object(u.jsxs)("p", {
                                                children: [
                                                  " Total Price : ",
                                                  Object(u.jsx)("span", {
                                                    className:
                                                      "text-pink-800 text-xl",
                                                    children:
                                                      null === e || void 0 === e
                                                        ? void 0
                                                        : e.totalPrice,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            Object(u.jsx)("div", {
                                              className: "mt-2",
                                              children: Object(u.jsx)(
                                                "button",
                                                {
                                                  className:
                                                    "bg-red-800 py-2 px-4 rounded-lg text-white uppercase w-full",
                                                  onClick: function () {
                                                    return (function (e) {
                                                      if (
                                                        window.confirm(
                                                          "Are you sure, You want to delete it?"
                                                        )
                                                      ) {
                                                        var t =
                                                          "http://localhost:5000/orders/".concat(
                                                            e
                                                          );
                                                        fetch(t, {
                                                          method: "DELETE",
                                                        })
                                                          .then(function (e) {
                                                            return e.json();
                                                          })
                                                          .then(function (t) {
                                                            if (
                                                              t.deletedCount > 0
                                                            ) {
                                                              R()(
                                                                "Successfully Placed the order !",
                                                                "",
                                                                "success"
                                                              );
                                                              var s = c.filter(
                                                                function (t) {
                                                                  return (
                                                                    t._id !== e
                                                                  );
                                                                }
                                                              );
                                                              i(s);
                                                            }
                                                          });
                                                      }
                                                    })(e._id);
                                                  },
                                                  children: "Delete",
                                                }
                                              ),
                                            }),
                                          ],
                                        }),
                                      },
                                      e._id
                                    );
                                  }),
                                })
                              : Object(u.jsx)("div", {
                                  children: Object(u.jsx)("img", {
                                    className: "m-auto w-20 mt-24 block",
                                    src: M,
                                    alt: "",
                                  }),
                                }),
                          }),
                        })
                      : Object(u.jsx)("div", {
                          children: Object(u.jsx)("h1", {
                            className:
                              "text-center text-2xl text-indigo-900 font-semibold mb-12",
                            children: "You have No Orders Yet!",
                          }),
                        }),
                }),
              ],
            }),
          });
        },
        U = function () {
          var e = P().user,
            t = {
              displayName: null === e || void 0 === e ? void 0 : e.displayName,
              email: null === e || void 0 === e ? void 0 : e.email,
            },
            c = Object(s.useState)(t),
            i = Object(d.a)(c, 2),
            n = i[0],
            r = i[1],
            a = function (e) {
              var t = e.target.name,
                c = e.target.value,
                s = Object(y.a)({}, n);
              (s[t] = c), r(s);
            };
          return Object(u.jsx)("div", {
            children: Object(u.jsx)("div", {
              className: "bg-blue-100 py-24",
              children: Object(u.jsxs)("div", {
                className: "m-auto container full-width-all m-auto",
                children: [
                  Object(u.jsx)("h2", {
                    className: "text-center text-3xl",
                    children: " Post Your Feedback ",
                  }),
                  Object(u.jsx)("div", {
                    className: "m-auto md:w-8/12 px-2",
                    children: Object(u.jsxs)("form", {
                      onSubmit: function (e) {
                        var t = Object(y.a)({}, n);
                        fetch(" http://localhost:5000/reviews", {
                          method: "POST",
                          headers: { "content-type": "application/json" },
                          body: JSON.stringify(t),
                        })
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            console.log(e),
                              e.insertedId &&
                                alert("successfully published your feedback.");
                          }),
                          e.preventDefault();
                      },
                      className: "register-form mt-6",
                      children: [
                        Object(u.jsx)("div", {
                          children: Object(u.jsx)("input", {
                            required: !0,
                            className: "py-2 px-4 w-full text-lg  rounded-md ",
                            name: "displayName",
                            type: "text",
                            onBlur: a,
                            value:
                              null === e || void 0 === e
                                ? void 0
                                : e.displayName,
                          }),
                        }),
                        " ",
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("div", {
                          children: Object(u.jsx)("input", {
                            required: !0,
                            className: "py-2 px-4 w-full text-lg  rounded-md ",
                            name: "email",
                            type: "email",
                            onBlur: a,
                            value:
                              null === e || void 0 === e ? void 0 : e.email,
                          }),
                        }),
                        " ",
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("div", {
                          children: Object(u.jsx)("input", {
                            required: !0,
                            className: "py-2 px-4 w-full text-lg  rounded-md",
                            name: "rating",
                            type: "number",
                            step: "0.01",
                            onBlur: a,
                            min: "0",
                            max: "5",
                            placeholder: "Your rating ( 0 - 5 )",
                          }),
                        }),
                        " ",
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("div", {
                          children: Object(u.jsx)("textarea", {
                            required: !0,
                            className: "py-2 px-4 w-full text-lg  rounded-md",
                            name: "feedback",
                            type: "text",
                            onBlur: a,
                            placeholder: "Your feedback",
                          }),
                        }),
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("input", {
                          className:
                            "py-2 px-4 text-lg text-white rounded-md bg-indigo-900 cursor-pointer hover:bg-indigo-800",
                          type: "submit",
                          value: "Add Review",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        I = c(28),
        J = c(39),
        F =
          (c(78),
          function (e) {
            var t = e.totalprice,
              c = e.fullOrder,
              i = P().user,
              n = Object(I.useStripe)(),
              r = Object(I.useElements)(),
              a = Object(l.g)(),
              o = Object(s.useState)(""),
              j = Object(d.a)(o, 2),
              b = j[0],
              x = j[1],
              h = Object(s.useState)(""),
              m = Object(d.a)(h, 2),
              O = m[0],
              p = m[1],
              f = Object(s.useState)(!1),
              g = Object(d.a)(f, 2),
              v = g[0],
              A = g[1],
              k = t,
              S = Object(s.useState)(""),
              C = Object(d.a)(S, 2),
              E = C[0],
              B = C[1];
            Object(s.useEffect)(
              function () {
                fetch("http://localhost:5000/create-payment-intent", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ price: k }),
                })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return B(e.clientSecret);
                  });
              },
              [k]
            );
            var L = (function () {
              var e = Object(w.a)(
                N.a.mark(function e(t) {
                  var s, l, d, o, j, b, u, h;
                  return N.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((t.preventDefault(), n && r)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          if (null != (s = r.getElement(I.CardElement))) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          return (
                            A(!0),
                            (e.next = 9),
                            n.createPaymentMethod({ type: "card", card: s })
                          );
                        case 9:
                          return (
                            (l = e.sent),
                            (d = l.error),
                            (o = l.paymentMethod),
                            d
                              ? (x(d.message), p(""))
                              : (x(""), console.log("[PaymentMethod]", o)),
                            (e.next = 16),
                            n.confirmCardPayment(E, {
                              payment_method: {
                                card: s,
                                billing_details: {
                                  name: i.displayName,
                                  email: i.email,
                                },
                              },
                            })
                          );
                        case 16:
                          (j = e.sent),
                            (b = j.paymentIntent),
                            (u = j.error)
                              ? (x(u.message), p(""))
                              : (x(""),
                                p("Your Payment Processed successfully"),
                                console.log(b),
                                A(!1),
                                (h = Object(y.a)(
                                  Object(y.a)({}, c),
                                  {},
                                  {
                                    created: b.created,
                                    last4: o.card.last4,
                                    transaction:
                                      b.client_secret.slice("_secret"),
                                  }
                                )),
                                console.log(h),
                                fetch(" http://localhost:5000/orders", {
                                  method: "POST",
                                  headers: {
                                    "content-type": "application/json",
                                  },
                                  body: JSON.stringify(h),
                                })
                                  .then(function (e) {
                                    return e.json();
                                  })
                                  .then(function (e) {
                                    e.insertedId &&
                                      R()(
                                        "Successfully Placed the order !",
                                        "",
                                        "success"
                                      ),
                                      a.push("/myOrders");
                                  }),
                                h.addToCartId &&
                                  fetch(
                                    "http://localhost:5000/addToCart/".concat(
                                      h.addToCartId
                                    ),
                                    { method: "DELETE" }
                                  )
                                    .then(function (e) {
                                      return e.json();
                                    })
                                    .then(function (e) {}));
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
            return Object(u.jsxs)("div", {
              children: [
                Object(u.jsxs)("form", {
                  className: "",
                  onSubmit: L,
                  children: [
                    Object(u.jsx)(I.CardElement, {
                      className: "pb-12",
                      required: !0,
                      options: {
                        style: {
                          base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": { color: "#aab7c4" },
                          },
                          invalid: { color: "#9e2146" },
                        },
                      },
                    }),
                    v
                      ? Object(u.jsx)("div", {
                          children: Object(u.jsx)("img", {
                            className: "m-auto w-20 mt-24 block",
                            src: M,
                            alt: "",
                          }),
                        })
                      : Object(u.jsxs)("button", {
                          type: "submit",
                          disabled: !n || O,
                          className: O
                            ? "text-gray-200 bg-gray-500 border cursor-not-allowed rounded-lg border-gray-500 font-semibold text-lg py-2 px-4 "
                            : "text-indigo-900 font-semibold text-lg py-2 px-4 border-blue-800 border hover:bg-indigo-900 hover:text-white rounded-lg",
                          children: ["Pay $", k],
                        }),
                  ],
                }),
                b &&
                  Object(u.jsxs)("p", {
                    className: "text-red-800 font-semibold",
                    children: [b, "!"],
                  }),
                O &&
                  Object(u.jsx)("div", {
                    children: Object(u.jsxs)("p", {
                      className: "text-green-600 font-semibold",
                      children: [O, "!"],
                    }),
                  }),
              ],
            });
          }),
        G = Object(J.a)(
          "pk_test_51Jw9J1KKEsZqvGCg97fSIy3lJLGyzaRujnJzeTESdSGhGUkyqW8Tr9v1NDCb0aPMExBsW2Aa15wOUoXr5d76YRYf008VFKDrqV"
        ),
        V = function () {
          var e = Object(s.useState)({}),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1],
            n = Object(l.i)().paymentId;
          return (
            Object(s.useEffect)(function () {
              fetch("http://localhost:5000/addToCart/".concat(n))
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return i(e);
                });
            }, []),
            console.log(c),
            Object(u.jsx)("div", {
              className: "",
              children: Object(u.jsxs)("div", {
                className: "pt-24 pb-24 text-green-700 text-center",
                children: [
                  Object(u.jsxs)("div", {
                    children: [
                      "Your Id : ",
                      n,
                      Object(u.jsxs)("h2", {
                        className: "text-2xl font-extrabold tracking-wider",
                        children: [" ", c.productName, " "],
                      }),
                      Object(u.jsxs)("h2", {
                        className: "text-2xl font-extrabold tracking-wider",
                        children: [" ", c.price, " "],
                      }),
                      Object(u.jsxs)("h2", {
                        className: "text-2xl font-extrabold tracking-wider",
                        children: [" ", c.quantity, " "],
                      }),
                    ],
                  }),
                  Object(u.jsx)("div", {
                    children:
                      c.price &&
                      Object(u.jsx)(I.Elements, {
                        stripe: G,
                        children: Object(u.jsx)(F, { orderId: c }, c._id),
                      }),
                  }),
                ],
              }),
            })
          );
        },
        Z = function () {
          var e = P().user;
          return Object(u.jsx)("div", {
            className: "py-24",
            children: Object(u.jsxs)("div", {
              className: "container full-width-all mx-auto px-2",
              children: [
                Object(u.jsx)("div", {
                  children: Object(u.jsx)("h1", {
                    className:
                      "text-indigo-900 font-semibold text-4xl mb-6 ml-4",
                    children: "Admin Profile",
                  }),
                }),
                Object(u.jsx)("hr", {}),
                Object(u.jsxs)("div", {
                  className: "md:flex py-8 md:pl-8",
                  children: [
                    Object(u.jsx)("div", {
                      className: "mr-3 md:mr-8",
                      children: Object(u.jsxs)("div", {
                        children: [
                          Object(u.jsx)("img", {
                            className: "w-36 rounded-full block mx-auto",
                            src: null === e.photoURL ? S : e.photoURL,
                            alt: "",
                          }),
                          Object(u.jsx)("button", {
                            className:
                              "py-2 px-6 mt-6 bg-indigo-900 text-white rounded-full block mx-auto my-4 hover:bg-indigo-800",
                            children: "Edit Profile",
                          }),
                        ],
                      }),
                    }),
                    Object(u.jsxs)("div", {
                      children: [
                        Object(u.jsxs)("div", {
                          className: "my-6",
                          children: [
                            Object(u.jsx)("p", {
                              className: "text-gray-600 ",
                              children: "Full Name",
                            }),
                            Object(u.jsx)("h1", {
                              className:
                                "text-indigo-900 font-semibold text-2xl",
                              children: e.displayName,
                            }),
                          ],
                        }),
                        Object(u.jsxs)("div", {
                          children: [
                            Object(u.jsx)("p", {
                              className: "text-gray-600 ",
                              children: "Email",
                            }),
                            Object(u.jsx)("h1", {
                              className:
                                "text-indigo-900 font-semibold text-2xl",
                              children: e.email,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Q = function () {
          return Object(u.jsxs)("div", {
            className: "bg-indigo-900 pt-10  ",
            children: [
              Object(u.jsxs)("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container full-width-all m-auto pb-8 px-2",
                children: [
                  Object(u.jsxs)("div", {
                    className: "col-sapn- ",
                    children: [
                      Object(u.jsx)(a.c, {
                        to: "/home",
                        children: Object(u.jsxs)("h1", {
                          className: "text-4xl font-bold text-white ",
                          children: [
                            "Fashion- ",
                            Object(u.jsx)("span", {
                              className: "text-blue-300",
                              children: "Zone",
                            }),
                            " ",
                          ],
                        }),
                      }),
                      Object(u.jsx)("p", {
                        className: "py-8 text-white font-semibold",
                        children:
                          "Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family.",
                      }),
                      Object(u.jsxs)(a.c, {
                        className:
                          "text-blue-300 font-semibold text-lg uppercase hover:text-white",
                        to: "/shop",
                        children: [
                          "Shopping Now ",
                          Object(u.jsx)("i", {
                            class: "fas fa-arrow-right ml-1",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(u.jsx)("div", {
                    className: "col-sapn-1 ",
                    children: Object(u.jsxs)("div", {
                      className: " mt-2 text-center",
                      children: [
                        Object(u.jsx)("h3", {
                          className:
                            "text-center py-2 font-semibold text-xl text-white",
                          children: "Supports",
                        }),
                        Object(u.jsx)(a.c, {
                          to: "/aboutUs",
                          children: Object(u.jsxs)("ul", {
                            className: "tab-list text-gray-300",
                            children: [
                              Object(u.jsx)("li", {
                                className: "cursor-pointer hover:underline",
                                children: "Terams & Conditions",
                              }),
                              Object(u.jsx)("li", {
                                className: "cursor-pointer hover:underline",
                                children: "Privecy Policy",
                              }),
                              Object(u.jsx)("li", {
                                className: "cursor-pointer hover:underline",
                                children: "All Guidelines",
                              }),
                              Object(u.jsx)("li", {
                                className: "cursor-pointer hover:underline",
                                children: "History",
                              }),
                              Object(u.jsx)("li", {
                                className: "cursor-pointer hover:underline",
                                children: "Your Feadback ",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsx)("div", {
                    className: "col-sapn-6 ",
                    children: Object(u.jsxs)("div", {
                      className: " mt-2 text-center",
                      children: [
                        Object(u.jsx)("h3", {
                          className:
                            "text-center py-2 font-semibold text-xl text-white",
                          children: " Links",
                        }),
                        Object(u.jsxs)("ul", {
                          className: "tab-list text-gray-300",
                          children: [
                            Object(u.jsx)("li", {
                              className: "cursor-pointer hover:underline",
                              children: Object(u.jsx)(a.c, {
                                to: "/login",
                                children: "Login",
                              }),
                            }),
                            Object(u.jsx)("li", {
                              className: "cursor-pointer hover:underline",
                              children: Object(u.jsx)(a.c, {
                                to: "/register",
                                children: "Register",
                              }),
                            }),
                            Object(u.jsx)("li", {
                              className: "cursor-pointer hover:underline",
                              children: Object(u.jsx)(a.c, {
                                to: "/aboutUs",
                                children: " About Us",
                              }),
                            }),
                            Object(u.jsx)("li", {
                              className: "cursor-pointer hover:underline",
                              children: Object(u.jsx)(a.c, {
                                to: "/contactUs",
                                children: " Contact Us",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsx)("div", {
                    className: "col-sapn-12 ",
                    children: Object(u.jsxs)("div", {
                      className:
                        "bg-indigo-200 border-l-4 border-pink-600 rounded-lg p-4",
                      children: [
                        Object(u.jsx)("i", {
                          class: "fas fa-headset text-pink-700 text-6xl",
                        }),
                        Object(u.jsx)("h1", {
                          className: "text-2xl font-bold text-indigo-900 py-8",
                          children: "Emergency Cases",
                        }),
                        Object(u.jsx)("p", {
                          className: "text-gray-500",
                          children:
                            "Please feel welcome to contact our friendly reception staff with any general or travel enquiry call us.",
                        }),
                        Object(u.jsxs)("div", {
                          className:
                            "flex items-center justify-start   text-gray-600 py-8 ",
                          children: [
                            Object(u.jsx)("p", {
                              children: Object(u.jsx)("i", {
                                class:
                                  "fas fa-phone text-3xl text-pink-700  mr-4",
                              }),
                            }),
                            Object(u.jsx)("h3", {
                              className: "text-lg font-bold",
                              children: "+8801712 365764",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(u.jsx)("div", {
                className: "bg-gray-900",
                children: Object(u.jsx)("p", {
                  className: "py-4 text-center text-gray-500",
                  children:
                    "\xa9 2020 DataSoft, All Rights Reserved. With Love by time-zone.com",
                }),
              }),
            ],
          });
        },
        _ = function (e) {
          var t = e.title,
            c = e.content,
            s = e.color;
          return Object(u.jsx)("div", {
            children: Object(u.jsxs)("div", {
              className: "px-2 lg:px-0 pb-12 text-center",
              children: [
                Object(u.jsx)("h1", {
                  className: "text-4xl md:text-5xl text-indigo-900  ".concat(
                    s,
                    " "
                  ),
                  children: t,
                }),
                Object(u.jsx)("br", {}),
                Object(u.jsx)("hr", {
                  className: "w-24 border-indigo-900 border-t-2 mx-auto",
                }),
                Object(u.jsx)("br", {}),
                Object(u.jsx)("h4", {
                  className: "text-xl w-full sm:w3/4 text-indigo-900  ".concat(
                    s,
                    " "
                  ),
                  children: c,
                }),
              ],
            }),
          });
        },
        $ = c(40),
        ee = c(41),
        te = c(42),
        ce = function (e) {
          ee.a, te.b;
          var t = e.review,
            c = t.displayName,
            s = t.rating,
            i = t.feedback;
          return Object(u.jsx)("div", {
            children: Object(u.jsxs)("div", {
              className: "shadow-2xl p-4 bg-indigo-200 rounded-lg",
              children: [
                Object(u.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    Object(u.jsx)("img", {
                      style: { cursor: "pointer" },
                      className: "w-12 rounded-full",
                      src: S,
                      alt: "",
                    }),
                    Object(u.jsxs)("div", {
                      className: "ml-4",
                      children: [
                        Object(u.jsx)("p", {
                          className: "text-xl font-semibold",
                          children: c,
                        }),
                        Object(u.jsxs)("p", {
                          className: "text-sm text-yellow-500",
                          children: [
                            Object(u.jsx)($.a, {
                              initialRating: s,
                              readonly: !0,
                              emptySymbol: "far fa-star star-icon",
                              fullSymbol: "fas fa-star star-icon",
                            }),
                            " ",
                            Object(u.jsxs)("span", {
                              className: "text-indigo-900 font-semibold",
                              children: ["( ", s, " )"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(u.jsx)("div", {}),
                  ],
                }),
                Object(u.jsxs)("div", {
                  className: "bg-gray-200 p-4 rounded-lg mt-4",
                  style: { height: "200px" },
                  children: [
                    Object(u.jsx)("p", {
                      children: Object(u.jsx)("i", {
                        class: "fas fa-quote-left text-2xl",
                      }),
                    }),
                    Object(u.jsx)("p", {
                      className: "text-gray-500",
                      children: i.slice(0, 150),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        se = c(95),
        ie = c(93),
        ne = (c(47), c(48), c(49), c(50), c(79), c(94)),
        re = c(90),
        ae = c(91),
        le = c(92);
      ne.a.use([re.a, ae.a, le.a]);
      var de = function () {
          var e = Object(s.useState)([]),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1];
          return (
            Object(s.useEffect)(function () {
              return [
                fetch("http://localhost:5000/reviews")
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return i(e);
                  }),
              ];
            }, []),
            Object(u.jsx)("div", {
              className: "py-24",
              children: Object(u.jsxs)("div", {
                className: "container m-auto px-2 full-width-all",
                children: [
                  Object(u.jsx)("div", {
                    className: "services-page-banner",
                    children: Object(u.jsx)("div", {
                      className: "full-width-all container m-auto text-white",
                      children: Object(u.jsx)(_, {
                        title: " Customers Feedback",
                      }),
                    }),
                  }),
                  Object(u.jsx)("div", {
                    className: "slider-all-review",
                    children: Object(u.jsx)(se.a, {
                      slidesPerView: 3,
                      spaceBetween: 30,
                      autoplay: { delay: 3e3, disableOnInteraction: !1 },
                      breakpoints: {
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        600: { slidesPerView: 2, spaceBetween: 20 },
                        1e3: { slidesPerView: 3, spaceBetween: 40 },
                      },
                      className: "mySwiper ",
                      children: Object(u.jsx)("div", {
                        children: c.map(function (e) {
                          return Object(u.jsx)(ie.a, {
                            children: Object(u.jsx)(ce, { review: e }, e._id),
                          });
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        oe = function (e) {
          var t = e.banner,
            c = t.img,
            s = t.rating;
          t.price;
          return (
            console.log(t),
            Object(u.jsxs)("div", {
              className: "border rounded relative",
              children: [
                Object(u.jsx)("div", {
                  children: Object(u.jsx)("img", { src: c, alt: "" }),
                }),
                Object(u.jsx)("div", {
                  children: Object(u.jsx)("div", {
                    className:
                      " bg-sky-800 py-2 px-2 absolute bottom-0 w-full opacity-90 flex justify-between items-center",
                    children: Object(u.jsx)("div", {
                      className: "text-white",
                      children: Object(u.jsx)($.a, {
                        className: "text-sm text-yellow-500 mb-2",
                        initialRating: s,
                        readonly: !0,
                        emptySymbol: "far fa-star star-icon",
                        fullSymbol: "fas fa-star star-icon",
                      }),
                    }),
                  }),
                }),
              ],
            })
          );
        },
        je = (c(80), c.p + "static/media/23.00e44007.jpg"),
        be = c.p + "static/media/24.047922d4.jpg",
        xe = c.p + "static/media/25.ac027c40.jpg",
        ue = c.p + "static/media/26.99270cbd.jpg",
        he = function () {
          var e = Object(s.useState)([]),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1];
          return (
            Object(s.useEffect)(function () {
              return [
                fetch("http://localhost:5000/products")
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return i(e.products);
                  }),
              ];
            }, []),
            [c, i]
          );
        };
      ne.a.use([re.a, ae.a, le.a]);
      var me = function () {
          var e = he(),
            t = Object(d.a)(e, 1)[0];
          return Object(u.jsx)("div", {
            children: Object(u.jsx)("div", {
              className: "py-24",
              children: Object(u.jsxs)("div", {
                className: "container m-auto px-2 full-width-all",
                children: [
                  Object(u.jsx)("div", {
                    className: "services-page-banner",
                    children: Object(u.jsx)("div", {
                      className: "full-width-all container m-auto text-white",
                      children: Object(u.jsx)(_, {
                        title: "Your Best Deals",
                        content: "",
                      }),
                    }),
                  }),
                  Object(u.jsx)("div", {
                    className: "slider-group-banner",
                    children: Object(u.jsx)(se.a, {
                      slidesPerView: 4,
                      spaceBetween: 10,
                      autoplay: { delay: 3e3, disableOnInteraction: !1 },
                      breakpoints: {
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                          centeredSlides: !0,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                          centeredSlides: !0,
                        },
                        1e3: { slidesPerView: 2, spaceBetween: 40 },
                      },
                      className: "mySwiper ",
                      children: Object(u.jsx)("div", {
                        children:
                          null === t || void 0 === t
                            ? void 0
                            : t.slice(0, 12).map(function (e) {
                                return Object(u.jsx)(ie.a, {
                                  children: Object(u.jsx)(
                                    oe,
                                    { banner: e },
                                    e._id
                                  ),
                                });
                              }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Oe = function () {
          return Object(u.jsx)("div", {
            className: "py-24 ",
            children: Object(u.jsxs)("div", {
              className: "container full-width-all mx-auto px-2",
              children: [
                Object(u.jsx)("div", {
                  className: "services-page-banner",
                  children: Object(u.jsx)("div", {
                    className: "full-width-all container m-auto text-white",
                    children: Object(u.jsx)(_, {
                      title: "Most Visited Categories",
                      content: "",
                    }),
                  }),
                }),
                Object(u.jsxs)("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2  gap-8 ",
                  children: [
                    Object(u.jsx)(a.c, {
                      to: "/shop",
                      children: Object(u.jsx)("img", {
                        src: xe,
                        className: "rounded-lg w-full",
                        alt: "",
                      }),
                    }),
                    Object(u.jsx)(a.c, {
                      to: "/shop",
                      children: Object(u.jsx)("img", {
                        src: ue,
                        className: "rounded-lg w-full",
                        alt: "",
                      }),
                    }),
                    Object(u.jsx)(a.c, {
                      to: "/shop",
                      children: Object(u.jsx)("img", {
                        src: je,
                        className: "rounded-lg w-full",
                        alt: "",
                      }),
                    }),
                    Object(u.jsx)(a.c, {
                      to: "/shop",
                      children: Object(u.jsx)("img", {
                        src: be,
                        className: "rounded-lg w-full",
                        alt: "",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        pe =
          (c(81),
          function (e) {
            var t = e.banner,
              c = t.img,
              s = t.titleOne,
              i = t.titleTwo,
              n = t.description;
            return Object(u.jsx)("div", {
              className: " banner-home ",
              children: Object(u.jsx)("div", {
                className: "container m-auto px-2 py-8 lg:py-24 full-width-all",
                children: Object(u.jsxs)("div", {
                  className: "   md:grid  grid-cols-12 items-center",
                  children: [
                    Object(u.jsxs)("div", {
                      className: "col-span-6 text-balck text-left py-4",
                      children: [
                        Object(u.jsxs)("h1", {
                          className: "text-2xl md:text-3xl font-extrabold",
                          children: [
                            " ",
                            Object(u.jsx)("span", {
                              className: "text-indigo-900",
                              children: s,
                            }),
                            " ",
                          ],
                        }),
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("h1", {
                          className:
                            "text-3xl md:text-5xl text-indigo-900 font-bold",
                          children: i,
                        }),
                        Object(u.jsx)("br", {}),
                        Object(u.jsx)("h4", {
                          className: "text-xl my-10 hidden md:block",
                          children: n,
                        }),
                      ],
                    }),
                    Object(u.jsx)("div", {
                      className: "col-span-6 flex items-center header-banner",
                      children: Object(u.jsx)("img", {
                        className: "header-banner-img",
                        src: c,
                        alt: "",
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
        fe = c.p + "static/media/h1.2885b89d.png",
        ge = c.p + "static/media/h2.c87b8d87.png",
        ve = c.p + "static/media/h3.381bc40f.png",
        Ae = c.p + "static/media/h4.1c481dee.png",
        Ne = c.p + "static/media/h5.0356beac.png";
      ne.a.use([re.a, ae.a, le.a]);
      var we = [
          {
            _id: 1,
            img: fe,
            titleOne: "Time -Zone.",
            titleTwo: "Rendering the meaning - of time",
            description:
              "We provide travelers with an authentic Jordanian experience thatthey can remember for the rest of their lives",
          },
          {
            _id: 2,
            img: ge,
            titleOne: "Modern -Life.",
            titleTwo: "Enojoy your life with - more power",
            description:
              "We provide travelers with an authentic Jordanian experience thatthey can remember for the rest of their lives",
          },
          {
            _id: 3,
            img: ve,
            titleOne: "Get -Smart.",
            titleTwo: "Make you path with Exclusive one",
            description:
              "We provide travelers with an authentic Jordanian experience thatthey can remember for the rest of their lives",
          },
          {
            _id: 4,
            img: Ae,
            titleOne: "Simple World",
            titleTwo: "Rendering the meaning - of time",
            description:
              "We provide travelers with an authentic Jordanian experience thatthey can remember for the rest of their lives",
          },
          {
            _id: 5,
            img: Ne,
            titleOne: "Time -Zone.",
            titleTwo: "Rendering the meaning - of time",
            description:
              "We provide travelers with an authentic Jordanian experience thatthey can remember for the rest of their lives",
          },
        ],
        ye = function () {
          return Object(u.jsx)("div", {
            children: Object(u.jsx)("div", {
              children: Object(u.jsx)("div", {
                className: "slider-group-banner",
                children: Object(u.jsx)(se.a, {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  autoplay: { delay: 4e3, disableOnInteraction: !1 },
                  breakpoints: {
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                      centeredSlides: !0,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                      centeredSlides: !0,
                    },
                    1e3: { slidesPerView: 1, spaceBetween: 0 },
                  },
                  className: "mySwiper ",
                  children: Object(u.jsx)("div", {
                    className: " ",
                    children: we.map(function (e) {
                      return Object(u.jsx)(ie.a, {
                        children: Object(u.jsx)(pe, { banner: e }, e._id),
                      });
                    }),
                  }),
                }),
              }),
            }),
          });
        },
        ke =
          (c(82),
          function (e) {
            var t = e.product,
              c = t._id,
              s = t.InStock,
              i = t.productName,
              n = t.model,
              r = t.rating,
              l = t.price,
              d = t.img,
              o = P().user;
            return Object(u.jsx)("div", {
              className: " ",
              children: Object(u.jsxs)("div", {
                className:
                  "shadow-xl bg-white rounded hover:shadow-2xl border p-2",
                children: [
                  Object(u.jsxs)("div", {
                    className: "px cart product-img",
                    children: [
                      !s &&
                        Object(u.jsx)("div", {
                          className: "limit-stock ",
                          children: Object(u.jsx)("p", {
                            className: "text-2xl text-center ",
                            children: "Stock Out",
                          }),
                        }),
                      Object(u.jsx)("img", {
                        className: "rounded ",
                        style: { height: "100%", width: "100%" },
                        src: d,
                        alt: "",
                      }),
                    ],
                  }),
                  Object(u.jsx)("hr", { className: "mt-2" }),
                  Object(u.jsxs)("div", {
                    className: "mt-2 flex justify-between",
                    children: [
                      Object(u.jsxs)("div", {
                        children: [
                          Object(u.jsx)("h1", {
                            className: "text-indigo-900 font-semibold text-md",
                            children: i,
                          }),
                          Object(u.jsxs)("p", {
                            className: "text-gray-400 inline-block  text-sm",
                            children: ["Brand : ", n],
                          }),
                        ],
                      }),
                      Object(u.jsx)("div", {
                        children: s
                          ? Object(u.jsxs)("button", {
                              onClick: function (e) {
                                var t = {
                                  productId: c,
                                  email: o.email,
                                  img: d,
                                  productName: i,
                                  price: l,
                                  quantity: 1,
                                  payment: !1,
                                  status: !1,
                                };
                                o.email
                                  ? fetch(" http://localhost:5000/addToCart", {
                                      method: "POST",
                                      headers: {
                                        "content-type": "application/json",
                                      },
                                      body: JSON.stringify(t),
                                    })
                                      .then(function (e) {
                                        return e.json();
                                      })
                                      .then(function (e) {
                                        e.insertedId
                                          ? R()(
                                              "Products added to cart!",
                                              " ",
                                              "success"
                                            )
                                          : R()({
                                              text: "Already Exist on add to cart!",
                                              button: "Add Another!",
                                            });
                                      })
                                  : R()(
                                      "Oops!",
                                      "You are not loged in, Please Log in fast!",
                                      ""
                                    );
                              },
                              children: [
                                " ",
                                Object(u.jsx)("i", {
                                  class:
                                    "fas fa-cart-plus text-pink-800 hover:text-indigo-900 text-2xl font-bold",
                                }),
                              ],
                            })
                          : Object(u.jsxs)("button", {
                              children: [
                                " ",
                                Object(u.jsx)("i", {
                                  class:
                                    "fas fa-cart-plus text-gray-800  text-2xl font-bold cursor-not-allowed",
                                }),
                              ],
                            }),
                      }),
                    ],
                  }),
                  Object(u.jsxs)("div", {
                    className: "py-3",
                    children: [
                      Object(u.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                          Object(u.jsx)("div", {
                            className: "",
                            children: Object(u.jsxs)("p", {
                              className: "text-indigo-900 font-bold text-sm",
                              children: [
                                " ",
                                Object(u.jsx)("i", {
                                  class: "fas fa-star text-yellow-500",
                                }),
                                " ",
                                r,
                              ],
                            }),
                          }),
                          Object(u.jsx)("div", {
                            className: "text-gray-500",
                            children: Object(u.jsxs)("span", {
                              className: "text-md text-pink-800 font-bold",
                              children: ["$ ", l],
                            }),
                          }),
                        ],
                      }),
                      Object(u.jsxs)("div", {
                        className: "flex pt-4 justify-between",
                        children: [
                          Object(u.jsx)(a.c, {
                            className:
                              "transition duration-500 border border-indigo-900 text-indigo-900 text-sm bg-white hover:bg-indigo-900 hover:text-white px-2 py-2 rounded   d-button ",
                            to: "shop/".concat(c),
                            children: " Details",
                          }),
                          s
                            ? Object(u.jsx)(a.c, {
                                className:
                                  "transition duration-500 bg-indigo-900 text-white px-2 py-2 rounded  hover:text-indigo-900 hover:bg-white text-sm  d-button-solid border hover:border-indigo-900",
                                to: "directOrder/".concat(c),
                                children: "Order Now",
                              })
                            : Object(u.jsx)("button", {
                                disabled: !0,
                                className:
                                  "transition  cursor-not-allowed duration-500 bg-gray-500 text-white px-3 py-2 rounded text-sm   d-button-solid border ",
                                children: "Order Now",
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }),
        Pe = function () {
          var e = he([]),
            t = Object(d.a)(e, 1)[0],
            c = (null === t || void 0 === t ? void 0 : t.length) - 8,
            s = Math.floor(Math.random() * c) + 1;
          return Object(u.jsx)("div", {
            className: "py-24 our-doctors-container",
            children: Object(u.jsxs)("div", {
              className: "container m-auto full-width-all ",
              children: [
                Object(u.jsx)("div", {
                  className: "services-page-banner",
                  children: Object(u.jsx)("div", {
                    className: "full-width-all container m-auto text-white",
                    children: Object(u.jsx)(_, {
                      title: "Featured Products",
                      content: "Amazing products added recently in our catalog",
                    }),
                  }),
                }),
                Object(u.jsx)("div", {
                  children: t.length
                    ? Object(u.jsx)("div", {
                        className:
                          "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 px-2 ",
                        children: t.slice(s, s + 8).map(function (e) {
                          return Object(u.jsx)(
                            ke,
                            { product: e, children: " " },
                            e._id
                          );
                        }),
                      })
                    : Object(u.jsx)("div", {
                        children: Object(u.jsx)("img", {
                          className: "m-auto block",
                          src: M,
                          alt: "",
                        }),
                      }),
                }),
                Object(u.jsx)("div", {
                  className: "mt-16 text-center ",
                  children: Object(u.jsx)(a.c, {
                    className:
                      "rounded-full py-3 px-6 border text-indigo-900 text-lg font-semibold border-indigo-900 hover:bg-indigo-900 hover:text-white transition duration-500 ease-in-out ",
                    to: "/shop",
                    children: " Find more Products",
                  }),
                }),
              ],
            }),
          });
        },
        Se = function (e) {
          var t = e.Category,
            c = he([]),
            s = Object(d.a)(c, 1)[0].filter(function (e) {
              return e.Category === t;
            });
          return Object(u.jsxs)("div", {
            children: [
              Object(u.jsx)("div", {
                children: Object(u.jsx)("h2", {
                  className:
                    "font-bold w-ful sm:w3/4 lg:w-2/4 text-4xl tracking-wide capitalize",
                  children: t,
                }),
              }),
              Object(u.jsx)("hr", { className: " my-4  border" }),
              Object(u.jsx)("div", {
                children: Object(u.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 px-2",
                  children: s.map(function (e) {
                    return Object(u.jsx)(ke, { product: e }, e.id);
                  }),
                }),
              }),
            ],
          });
        },
        Ce = function () {
          return Object(u.jsx)("div", {
            className: "py-12 ",
            children: Object(u.jsx)("div", {
              children: Object(u.jsx)(Se, { Category: "leptop" }),
            }),
          });
        },
        Ee = function () {
          return Object(u.jsx)("div", {
            className: "py-12 ",
            children: Object(u.jsx)("div", {
              children: Object(u.jsx)(Se, { Category: "mobile" }),
            }),
          });
        },
        Be = function () {
          return Object(u.jsx)("div", {
            className: "py-12 ",
            children: Object(u.jsx)("div", {
              children: Object(u.jsx)(Se, { Category: "watch" }),
            }),
          });
        },
        Le = function () {
          return Object(u.jsx)("div", {
            className: "py-24 ",
            children: Object(u.jsx)("div", {
              className: "container m-auto full-width-all ",
              children: Object(u.jsxs)("div", {
                className: "services-page-banner",
                children: [
                  Object(u.jsx)("div", {
                    className: "full-width-all container m-auto text-white",
                    children: Object(u.jsx)(_, {
                      title: "All Products By Categories",
                    }),
                  }),
                  Object(u.jsxs)("div", {
                    children: [
                      Object(u.jsx)(Be, {}),
                      Object(u.jsx)(Ee, {}),
                      Object(u.jsx)(Ce, {}),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        Te = function () {
          return Object(u.jsxs)("div", {
            children: [
              Object(u.jsx)(ye, {}),
              Object(u.jsx)("hr", {}),
              Object(u.jsx)(me, {}),
              Object(u.jsx)("hr", {}),
              Object(u.jsx)(Pe, {}),
              Object(u.jsx)("hr", {}),
              Object(u.jsx)(Le, {}),
              Object(u.jsx)("hr", {}),
              Object(u.jsx)(Oe, {}),
              Object(u.jsx)("hr", {}),
              Object(u.jsx)(de, {}),
            ],
          });
        },
        De = function () {
          return Object(u.jsx)("div", {
            className: "full-width-all container m-auto",
            children: Object(u.jsxs)("div", {
              className: "pt-24 pb-24 text-green-700 text-center",
              children: [
                Object(u.jsxs)("div", {
                  children: [
                    Object(u.jsx)("h2", {
                      className: "text-2xl font-extrabold tracking-wider",
                      children: "  A Passwrod reset email Successfully sent! ",
                    }),
                    Object(u.jsx)("h3", {
                      className:
                        "text-lg text-gray-600 font-extrabold tracking-wider mt-4",
                      children: " Please, check and reset your password ",
                    }),
                  ],
                }),
                Object(u.jsx)("div", {
                  className: "mt-16",
                  children: Object(u.jsx)(a.c, {
                    className:
                      "text-blue-500 font-semibold text-lg py-2 px-4 border-blue-500 border hover:bg-indigo-500 hover:text-white",
                    to: "/home",
                    children: "Back to Home",
                  }),
                }),
              ],
            }),
          });
        },
        We = function () {
          var e,
            t,
            c = P(),
            s = c.user,
            i = c.errorForPass,
            n = c.getEmail,
            r = c.setUser,
            d = c.setErrorForPass,
            o = c.forgatePass,
            j = Object(l.h)(),
            b = Object(l.g)(),
            x =
              (null === (e = j.state) || void 0 === e ? void 0 : e.from) ||
              "/afterResetPass";
          return Object(u.jsxs)("div", {
            className: "login-page bg-indigo-200",
            children: [
              Object(u.jsx)("div", {
                className: "login-page-banner text-white bg-pink-200",
                children: Object(u.jsx)(O, {
                  title: "Forget Your Password? Get a New One.",
                }),
              }),
              Object(u.jsxs)("div", {
                className:
                  "container m-auto py-32 px-4 grid grid-cols-12 gap-4 items-center full-width-all",
                children: [
                  Object(u.jsx)("div", { className: "col-span-3" }),
                  Object(u.jsxs)("div", {
                    className: "col-span-12 sm:col-span-8 md:col-span-6",
                    children: [
                      Object(u.jsx)("h1", {
                        className: "mb-8 text-4xl font-bold text-indigo-900",
                        children: "Reset your password by email",
                      }),
                      Object(u.jsx)("div", {
                        children: Object(u.jsx)("p", {
                          className: "text-red-600 text-lg font-semibold py-4",
                          children:
                            "Firebase: Error (auth/user-not-found)." === i
                              ? "Invalid Emial Address !"
                              : "",
                        }),
                      }),
                      Object(u.jsx)("div", {
                        className: "w-full",
                        children: Object(u.jsxs)("form", {
                          onSubmit: function (e) {
                            e.preventDefault(),
                              o()
                                .then(function () {
                                  r(s), b.push(x);
                                })
                                .catch(function (e) {
                                  var t = e.message;
                                  d(t);
                                });
                          },
                          children: [
                            Object(u.jsxs)("div", {
                              children: [
                                Object(u.jsx)("label", {
                                  className:
                                    "font-semibold text-gray-500 text-lg",
                                  htmlFor: "fo-pass",
                                  children: "your existing email :",
                                }),
                                Object(u.jsx)("br", {}),
                                Object(u.jsx)("input", {
                                  onBlur: n,
                                  id: "fo-pass",
                                  required: !0,
                                  className:
                                    "w-full p-2 mt-4 text-lg outline-none border-2 border-blue-100",
                                  type: "email",
                                  placeholder: "Your Email",
                                }),
                              ],
                            }),
                            Object(u.jsx)("br", {}),
                            Object(u.jsx)("br", {}),
                            Object(u.jsx)(
                              "input",
                              ((t = { type: "text" }),
                              Object(L.a)(t, "type", "submit"),
                              Object(L.a)(
                                t,
                                "className",
                                "cursor-pointer text-base block font-bold text-white px-4 py-2  bg-indigo-900 hover:bg-indigo-800\r\nradiou rounded-sm "
                              ),
                              Object(L.a)(t, "value", "Send password "),
                              t)
                            ),
                          ],
                        }),
                      }),
                      Object(u.jsx)("div", {
                        className: "mt-8",
                        children: Object(u.jsxs)("p", {
                          children: [
                            "Don't have a account?  ",
                            Object(u.jsx)(a.c, {
                              className:
                                "text-pink-700 font-bold underline\thover:text-pink-900 hover:no-underline mr-4",
                              to: "/register",
                              children: " Create now",
                            }),
                            "Or,  ",
                            Object(u.jsx)(a.c, {
                              className:
                                "text-pink-700 font-bold underline text-right  forget-link hover:text-pink-900 hover:no-underline ml-4",
                              to: "/login",
                              children: " Log In",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(u.jsx)("div", { className: "col-span-3" }),
                ],
              }),
            ],
          });
        },
        Xe =
          (c(83),
          function () {
            var e,
              t,
              c = P(),
              s = c.errorLogin,
              i = c.saveUser,
              n = c.getEmail,
              r = c.setUser,
              d = c.setErrorLogin,
              o = c.setIsLoading,
              j = c.getPassword,
              b = c.googleLogin,
              x = c.manualLogin,
              h = Object(l.h)(),
              m = Object(l.g)(),
              p =
                (null === (e = h.state) || void 0 === e ? void 0 : e.from) ||
                "/home";
            return Object(u.jsxs)("div", {
              className: "login-page bg-indigo-200",
              children: [
                Object(u.jsx)("div", {
                  className: "login-page-banner text-white",
                  children: Object(u.jsx)(O, {
                    title: "Your Account",
                    content:
                      "Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change.",
                  }),
                }),
                Object(u.jsxs)("div", {
                  className:
                    "container m-auto py-32 px-4 grid grid-cols-12 gap-4 items-center full-width-all  py-24",
                  children: [
                    Object(u.jsx)("div", { className: "col-span-3" }),
                    Object(u.jsxs)("div", {
                      className: "col-span-12 sm:col-span-8 md:col-span-6 ",
                      children: [
                        Object(u.jsx)("h1", {
                          className: "mb-8 text-5xl font-bold text-indigo-900",
                          children: "Log In",
                        }),
                        Object(u.jsx)("div", {
                          children: Object(u.jsx)("p", {
                            className: "text-red-600 font-semibold py-4",
                            children:
                              "Firebase: Error (auth/user-not-found)." === s
                                ? "Invalid Emial or Password"
                                : "",
                          }),
                        }),
                        Object(u.jsxs)("div", {
                          className: "w-full",
                          children: [
                            Object(u.jsxs)("form", {
                              onSubmit: function (e) {
                                e.preventDefault(),
                                  x()
                                    .then(function (e) {
                                      var t = e.user;
                                      r(t), m.push(p);
                                    })
                                    .catch(function (e) {
                                      var t = e.message;
                                      d(t);
                                    })
                                    .finally(function () {
                                      return o(!1);
                                    });
                              },
                              children: [
                                Object(u.jsx)("div", {
                                  children: Object(u.jsx)("input", {
                                    onBlur: n,
                                    required: !0,
                                    className:
                                      "w-full p-2 text-lg outline-none border-2 border-blue-100",
                                    type: "email",
                                    placeholder: "Your Email",
                                  }),
                                }),
                                Object(u.jsx)("br", {}),
                                Object(u.jsx)("div", {
                                  children: Object(u.jsx)("input", {
                                    onBlur: j,
                                    required: !0,
                                    className:
                                      "w-full  p-2 text-lg outline-none border-2 border-blue-100",
                                    type: "password",
                                    placeholder: "Your Password",
                                  }),
                                }),
                                Object(u.jsx)("br", {}),
                                Object(u.jsx)(
                                  "input",
                                  ((t = { type: "text" }),
                                  Object(L.a)(t, "type", "submit"),
                                  Object(L.a)(
                                    t,
                                    "className",
                                    "cursor-pointer text-base block font-bold text-white px-4 py-2 uppercase bg-indigo-900 hover:bg-indigo-800\r\nradiou rounded-sm "
                                  ),
                                  Object(L.a)(t, "value", "login"),
                                  t)
                                ),
                              ],
                            }),
                            Object(u.jsx)(a.c, {
                              className:
                                "text-pink-700 font-bold underline text-right block forget-link hover:text-pink-900 hover:no-underline",
                              to: "/forgatePass",
                              children: " Forget password?",
                            }),
                          ],
                        }),
                        Object(u.jsx)("div", {
                          className: "mt-8",
                          children: Object(u.jsxs)("p", {
                            children: [
                              "Don't have a account?  ",
                              Object(u.jsx)(a.c, {
                                className:
                                  "text-pink-700 font-bold underline\thover:text-pink-900 hover:no-underline ",
                                to: "/register",
                                children: " Create now",
                              }),
                            ],
                          }),
                        }),
                        Object(u.jsx)("div", {
                          className: "flex mt-8 login-btn",
                          children: Object(u.jsx)("button", {
                            onClick: function () {
                              b()
                                .then(function (e) {
                                  var t = e.user;
                                  r(t),
                                    i(t.displayName, t.email, "PUT"),
                                    m.push(p);
                                })
                                .catch(function (e) {
                                  var t = e.message;
                                  d(t);
                                })
                                .finally(function () {
                                  return o(!1);
                                });
                            },
                            className:
                              "mr-2 text-base block font-bold text-white px-4 py-2 bg-indigo-900 hover:bg-indigo-800\r\nradiou rounded-sm ",
                            children: "Google Login",
                          }),
                        }),
                      ],
                    }),
                    Object(u.jsx)("div", {
                      className: "col-span-3",
                      children: Object(u.jsx)("img", {
                        className: "w-full",
                        src: "",
                        alt: "",
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
        qe =
          (c(84),
          function () {
            var e = P(),
              t = e.user,
              c = e.admin,
              s = e.logOut;
            return Object(u.jsxs)("div", {
              className: "profile-shortcut bg-pink-700 shadow-2xl",
              children: [
                Object(u.jsxs)("div", {
                  children: [
                    Object(u.jsx)("div", {
                      children: Object(u.jsx)("img", { src: "", alt: "" }),
                    }),
                    t.displayName
                      ? Object(u.jsx)("h1", {
                          className: "text-lg font-semibold text-indigo-900",
                          children: t.displayName,
                        })
                      : "",
                    Object(u.jsx)("div", {
                      children: Object(u.jsx)(a.c, {
                        to: "/viewProfile",
                        children: Object(u.jsx)("button", {
                          className:
                            "py-2 px-3 bg-indigo-900 text-white rounded-full my-4 hover:bg-indigo-800",
                          children: "View Profile",
                        }),
                      }),
                    }),
                  ],
                }),
                Object(u.jsx)("hr", {}),
                Object(u.jsx)("div", {
                  children: Object(u.jsx)(a.c, {
                    to: "/addToCart",
                    className:
                      "text-indigo-900 font-semibold hover:text-indigo-700 block text-white mt-3",
                    children: "My Cart",
                  }),
                }),
                Object(u.jsx)("div", {
                  children: Object(u.jsx)(a.c, {
                    to: "/myOrders",
                    className:
                      "text-indigo-900 font-semibold hover:text-indigo-700  block text-white mt-3",
                    children: "My Orders",
                  }),
                }),
                Object(u.jsx)("div", {
                  children: Object(u.jsx)(a.c, {
                    to: "/myReview",
                    className:
                      "text-indigo-900 font-semibold hover:text-indigo-700  block text-white mt-3",
                    children: "My Review",
                  }),
                }),
                c &&
                  Object(u.jsx)("div", {
                    children: Object(u.jsx)("div", {
                      children: Object(u.jsx)(a.c, {
                        to: "/dashboard",
                        className:
                          "text-indigo-900 font-semibold hover:text-indigo-700 block  text-white mt-3",
                        children: "Admin Dashboard",
                      }),
                    }),
                  }),
                Object(u.jsx)("div", {
                  children: Object(u.jsx)("button", {
                    className:
                      "text-indigo-900 font-semibold hover:text-indigo-700 text-white mt-3",
                    onClick: s,
                    children: "Log Out",
                  }),
                }),
              ],
            });
          }),
        Re =
          (c(85),
          function (e) {
            e.fixed;
            var t = P().user,
              c = i.a.useState(!1),
              n = Object(d.a)(c, 2),
              r = n[0],
              l = n[1],
              o = Object(u.jsx)(ee.a, { icon: te.a }),
              j = Object(s.useState)("Off"),
              b = Object(d.a)(j, 2),
              x = b[0],
              h = b[1];
            return Object(u.jsx)(u.Fragment, {
              children: Object(u.jsx)("div", {
                className:
                  "  bg-gradient-to-b from-indigo-900  to-indigo-900 navbar-main",
                children: Object(u.jsx)("div", {
                  className:
                    "flex flex-wrap py-2 transition-all delay-1000 full-width-all m-auto container",
                  children: Object(u.jsx)("div", {
                    className: "w-full",
                    children: Object(u.jsx)("nav", {
                      className:
                        "relative flex flex-wrap items-center justify-between rounded",
                      children: Object(u.jsxs)("div", {
                        className:
                          "container mx-auto flex flex-wrap items-center justify-between",
                        children: [
                          Object(u.jsxs)("div", {
                            className:
                              "w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start",
                            children: [
                              Object(u.jsx)(a.b, {
                                className:
                                  "leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-gray-600 text-3xl md:text-5xl font-extrabold",
                                to: "/",
                                children: Object(u.jsx)("span", {
                                  className: "text-white",
                                  children: "  Fashion-Zone.",
                                }),
                              }),
                              Object(u.jsx)("button", {
                                className:
                                  "primary-color cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
                                type: "button",
                                onClick: function () {
                                  return l(!r);
                                },
                                children: o,
                              }),
                            ],
                          }),
                          Object(u.jsx)("div", {
                            className:
                              "lg:flex flex-grow items-center justify-center" +
                              (r ? " flex" : " hidden"),
                            id: "example-navbar-info",
                            children: Object(u.jsxs)("div", {
                              className:
                                "flex flex-col lg:flex-row list-none lg:ml-auto items-center\t",
                              children: [
                                Object(u.jsx)("div", {
                                  className: "nav-item",
                                  children: Object(u.jsx)(a.c, {
                                    className:
                                      "manu-item p-2  font-semibold text-white ",
                                    to: "/home",
                                    children: "Home",
                                  }),
                                }),
                                Object(u.jsx)("div", {
                                  className: "nav-item",
                                  children: Object(u.jsx)(a.c, {
                                    className:
                                      "manu-item p-2  font-semibold text-white",
                                    to: "/shop",
                                    children: "Shop",
                                  }),
                                }),
                                Object(u.jsx)("div", {
                                  className: "nav-item",
                                  children: Object(u.jsxs)(a.c, {
                                    className:
                                      "manu-item p-2  font-semibold text-white",
                                    to: "/addToCart",
                                    children: [
                                      "  ",
                                      Object(u.jsx)("i", {
                                        class:
                                          "fas fa-cart-plus text-white  text-2xl font-bold",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(u.jsxs)("div", {
                                  className: "profile-holder py-3 ml-4",
                                  children: [
                                    t.email || t.displayName
                                      ? Object(u.jsx)("img", {
                                          style: { cursor: "pointer" },
                                          onClick: function () {
                                            h(function (e) {
                                              return "On" === e ? "Off" : "On";
                                            });
                                          },
                                          className: "w-12 rounded-full",
                                          src:
                                            null === t.photoURL
                                              ? S
                                              : t.photoURL,
                                          alt: "",
                                        })
                                      : Object(u.jsx)(a.c, {
                                          className:
                                            "manu-item p-2 text-lg font-bold text-indigo-900 bg-white hover:text-pink-800 text-white rounded-md",
                                          to: "/login",
                                          children: " LogIn ",
                                        }),
                                    Object(u.jsx)("div", {
                                      className:
                                        "nav-item my-4 lg:my-0 proflie-item",
                                      children:
                                        t.email || t.displayName
                                          ? Object(u.jsx)("div", {
                                              className:
                                                "Off" === x
                                                  ? "active-profile-icon-area"
                                                  : "profile-icon-area",
                                              children: Object(u.jsx)(qe, {}),
                                            })
                                          : "",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            });
          }),
        Me =
          (c(86),
          function () {
            return Object(u.jsx)("div", {
              className: "full-width-all container m-auto",
              children: Object(u.jsxs)("div", {
                className: "pt-24 pb-24 text-red-700 text-center",
                children: [
                  Object(u.jsxs)("div", {
                    children: [
                      Object(u.jsx)("h1", {
                        className:
                          "text-9xl font-extrabold tracking-wider mb-8",
                        children: "404",
                      }),
                      Object(u.jsx)("h2", {
                        className: "text-5xl font-extrabold tracking-wider",
                        children: "Page Not Found",
                      }),
                    ],
                  }),
                  Object(u.jsx)("div", {
                    className: "mt-16",
                    children: Object(u.jsx)(a.c, {
                      className:
                        "text-blue-500 font-semibold text-lg py-2 px-4 border-blue-500 border hover:bg-indigo-500 hover:text-white",
                      to: "/home",
                      children: "Back to Home",
                    }),
                  }),
                ],
              }),
            });
          }),
        Ye = ["children"],
        ze = function (e) {
          var t = e.children,
            c = Object(C.a)(e, Ye),
            s = P(),
            i = s.user,
            n = s.isLoading;
          return (
            console.log(n),
            n
              ? "Loading ..."
              : Object(u.jsx)(
                  l.b,
                  Object(y.a)(
                    Object(y.a)({}, c),
                    {},
                    {
                      render: function (e) {
                        var c = e.location;
                        return i.email || i.displayName
                          ? t
                          : Object(u.jsx)(l.a, {
                              to: { pathname: "/login", state: { from: c } },
                            });
                      },
                    }
                  )
                )
          );
        },
        He = function () {
          var e,
            t,
            c = P(),
            s = c.getEmail,
            i = c.setUser,
            n = c.saveUser,
            r = c.disName,
            d = c.getDisName,
            o = c.errorReg,
            j = c.setErrorReg,
            b = c.setIsLoading,
            x = c.getPassword,
            h = c.updateProfileName,
            m = c.googleLogin,
            p = c.ManualRegister,
            f = Object(l.h)(),
            g = Object(l.g)(),
            v =
              (null === (e = f.state) || void 0 === e ? void 0 : e.from) ||
              "/home";
          return Object(u.jsxs)("div", {
            className: "bg-indigo-200",
            children: [
              Object(u.jsx)("div", {
                className: "login-page-banner text-white ",
                children: Object(u.jsx)(O, {
                  title: "Your Account",
                  content:
                    "Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change.",
                }),
              }),
              Object(u.jsxs)("div", {
                className:
                  "container m-auto py-32 grid grid-cols-12 gap-4 items-center\tfull-width-all px-4",
                children: [
                  Object(u.jsx)("div", { className: "col-span-3" }),
                  Object(u.jsxs)("div", {
                    className: "col-span-12 sm:col-span-8 md:col-span-6",
                    children: [
                      Object(u.jsx)("h1", {
                        className: "mb-8 text-4xl font-bold text-indigo-900",
                        children: "Register Now",
                      }),
                      Object(u.jsx)("div", {
                        children: Object(u.jsx)("p", {
                          className: "text-red-600 font-semibold py-4",
                          children: o,
                        }),
                      }),
                      Object(u.jsx)("div", {
                        className: "w-full",
                        children: Object(u.jsxs)("form", {
                          onSubmit: function (e) {
                            e.preventDefault(),
                              p()
                                .then(function (e) {
                                  var t = e.user;
                                  i(t), h(), n(r, t.email, "POST"), g.push(v);
                                })
                                .catch(function (e) {
                                  var t = e.message;
                                  j(t);
                                });
                          },
                          children: [
                            Object(u.jsx)("div", {
                              children: Object(u.jsx)("input", {
                                onBlur: d,
                                required: !0,
                                className:
                                  "w-full p-2 text-lg outline-none border-2 border-blue-100",
                                type: "text",
                                placeholder: "Full Name",
                              }),
                            }),
                            Object(u.jsx)("br", {}),
                            Object(u.jsx)("div", {
                              children: Object(u.jsx)("input", {
                                required: !0,
                                onBlur: s,
                                className:
                                  "w-full p-2 text-lg outline-none border-2 border-blue-100",
                                type: "email",
                                placeholder: "Your Email",
                              }),
                            }),
                            Object(u.jsx)("br", {}),
                            Object(u.jsx)("div", {
                              children: Object(u.jsx)("input", {
                                onBlur: x,
                                required: !0,
                                className:
                                  "w-full  p-2 text-lg outline-none border-2 border-blue-100",
                                type: "password",
                                placeholder: "Your Password",
                              }),
                            }),
                            Object(u.jsx)("br", {}),
                            Object(u.jsx)(
                              "input",
                              ((t = { type: "text" }),
                              Object(L.a)(t, "type", "submit"),
                              Object(L.a)(
                                t,
                                "className",
                                "cursor-pointer\t text-base block font-bold text-white px-4 py-2 uppercase bg-indigo-900 hover:bg-indigo-800 radiou rounded-sm "
                              ),
                              Object(L.a)(t, "value", "Sign Up"),
                              t)
                            ),
                          ],
                        }),
                      }),
                      Object(u.jsx)("div", {
                        className: "mt-8",
                        children: Object(u.jsxs)("p", {
                          children: [
                            "Already have an account?  ",
                            Object(u.jsx)(a.c, {
                              className:
                                "text-pink-700 font-bold underline\thover:text-pink-900 hover:no-underline ",
                              to: "/login",
                              children: " Sign In",
                            }),
                          ],
                        }),
                      }),
                      Object(u.jsx)("div", {
                        className: "flex mt-8",
                        children: Object(u.jsx)("button", {
                          onClick: function () {
                            m()
                              .then(function (e) {
                                var t = e.user;
                                i(t),
                                  n(t.displayName, t.email, "PUT"),
                                  g.push(v);
                              })
                              .catch(function (e) {
                                var t = e.message;
                                j(t);
                              })
                              .finally(function () {
                                return b(!1);
                              });
                          },
                          className:
                            "mr-2 text-base block font-bold text-white px-4 py-2  bg-indigo-900 hover:bg-indigo-800 radiou rounded-sm ",
                          children: "Google Login",
                        }),
                      }),
                    ],
                  }),
                  Object(u.jsx)("div", {
                    className: "col-span-3",
                    children: Object(u.jsx)("img", {
                      className: "w-full",
                      src: "",
                      alt: "",
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      var Ke = Object(l.k)(function (e) {
          var t = e.history;
          return (
            Object(s.useEffect)(function () {
              var e = t.listen(function () {
                window.scrollTo(0, 0);
              });
              return function () {
                e();
              };
            }, []),
            null
          );
        }),
        Ue = function (e) {
          var t = e.cart,
            c = e.carts,
            i = e.setCarts,
            n = t._id,
            r = t.img,
            l = t.productId,
            o = t.productName,
            j = t.price,
            b = t.quantity,
            x = Object(s.useState)(b),
            h = Object(d.a)(x, 2),
            m = h[0],
            O = h[1];
          return Object(u.jsx)("div", {
            children: Object(u.jsxs)("div", {
              className: "px-2 md:px-4 py-6 border shadow-2xl",
              children: [
                Object(u.jsxs)("div", {
                  className: "lg:flex justify-between items-center",
                  children: [
                    Object(u.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        Object(u.jsx)("img", {
                          className: "w-16",
                          src: r,
                          alt: "",
                        }),
                        Object(u.jsxs)("div", {
                          className: "text-indigo-900 font-semibold",
                          children: [
                            Object(u.jsx)("p", { children: l }),
                            Object(u.jsxs)("p", { children: [" ", o] }),
                          ],
                        }),
                      ],
                    }),
                    Object(u.jsx)("div", {
                      className: "text-indigo-900 font-semibold text-right",
                      children: Object(u.jsxs)("p", { children: ["$ ", j] }),
                    }),
                    Object(u.jsx)("div", {
                      children: Object(u.jsx)("input", {
                        className: "cart-input w-16 ml-2 pl-2 py-1  text-xl",
                        name: "quantity",
                        defaultValue: b,
                        type: "number",
                        min: "1",
                        required: !0,
                        onChange: function (e) {
                          O(e.target.value);
                        },
                        onClick: function () {
                          return (function (e) {
                            var t = { quantity: m },
                              c = "http://localhost:5000/addToCart/".concat(e);
                            fetch(c, {
                              method: "PUT",
                              headers: { "content-type": "application/json" },
                              body: JSON.stringify(t),
                            })
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {});
                          })(n);
                        },
                      }),
                    }),
                  ],
                }),
                Object(u.jsx)("hr", { className: "my-3" }),
                Object(u.jsx)("div", {
                  className: "text-indigo-900 font-semibold",
                  children: Object(u.jsxs)("p", {
                    className: "text-right mb-3",
                    children: ["Total : $ ", m * j],
                  }),
                }),
                Object(u.jsxs)("div", {
                  className: "flex justify-between items-center",
                  children: [
                    Object(u.jsx)("button", {
                      onClick: function () {
                        return (
                          (e = n),
                          void (
                            window.confirm(
                              "Are you sure, You want to delete it?"
                            ) &&
                            fetch(
                              "http://localhost:5000/addToCart/".concat(e),
                              { method: "DELETE" }
                            )
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (t) {
                                if (t.deletedCount > 0) {
                                  R()("Successfully Delete it!", "", "success");
                                  var s = c.filter(function (t) {
                                    return t._id !== e;
                                  });
                                  i(s);
                                }
                              })
                          )
                        );
                        var e;
                      },
                      children: Object(u.jsx)("i", {
                        class:
                          "far fa-trash-alt hover:text-red-800 border px-4 py-2 text-xl hover:border-red-800 cursor-pointer transition duration-500 rounded",
                      }),
                    }),
                    Object(u.jsx)(a.c, {
                      className:
                        "transition duration-500 bg-indigo-900 text-white px-10 py-2 rounded font-semibold hover:text-indigo-900 hover:bg-white  d-button-solid border hover:border-indigo-900",
                      to: "/addToCartOrder/".concat(n),
                      children: Object(u.jsx)("button", {
                        children: "Check Out",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Ie = function () {
          var e = Object(s.useState)([]),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1],
            n = P().user;
          return (
            Object(s.useEffect)(function () {
              var e = "http://localhost:5000/addToCart?email=".concat(n.email);
              fetch(e)
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return i(e);
                });
            }, []),
            Object(u.jsx)("div", {
              className: "py-16 min-h-screen",
              children: Object(u.jsxs)("div", {
                className: "container full-width-all mx-auto ",
                children: [
                  Object(u.jsx)("div", {
                    children: Object(u.jsx)("h1", {
                      className:
                        "text-left text-2xl text-indigo-900 font-semibold mb-12",
                      children: "You Can Place Order from your Cart Products!",
                    }),
                  }),
                  Object(u.jsx)("hr", {}),
                  Object(u.jsxs)("div", {
                    className: "pt-12",
                    children: [
                      !c.length &&
                        Object(u.jsxs)("div", {
                          children: [
                            Object(u.jsx)("h1", {
                              className:
                                "text-center text-2xl text-indigo-900 font-semibold mb-12",
                              children: "Oops! You Have no any Cart Products.",
                            }),
                            Object(u.jsxs)("div", {
                              className: "mt-24",
                              children: [
                                Object(u.jsx)("h1", {
                                  className:
                                    "text-center text-2xl text-indigo-900 font-semibold mb-12",
                                  children: "Want to make some Shop...?   ",
                                }),
                                Object(u.jsx)("p", {
                                  className: "text-center",
                                  children: Object(u.jsx)(a.c, {
                                    className:
                                      "transition duration-500 bg-indigo-900 text-white px-10 py-3 rounded font-semibold hover:text-indigo-900 hover:bg-white  d-button-solid border hover:border-indigo-900",
                                    to: "/shop",
                                    children: "Shop Now",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      Object(u.jsx)("div", {
                        children:
                          c.length &&
                          Object(u.jsx)("div", {
                            children: Object(u.jsx)("div", {
                              className: "grid grid-cols-2 gap-5 px-2",
                              children: c.map(function (e) {
                                return Object(u.jsx)(
                                  Ue,
                                  { cart: e, carts: c, setCarts: i },
                                  e._id
                                );
                              }),
                            }),
                          }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        Je = Object(J.a)(
          "pk_test_51Jw9J1KKEsZqvGCg97fSIy3lJLGyzaRujnJzeTESdSGhGUkyqW8Tr9v1NDCb0aPMExBsW2Aa15wOUoXr5d76YRYf008VFKDrqV"
        ),
        Fe = function (e) {
          var t = e.totalprice,
            c = e.fullOrder;
          return Object(u.jsx)("div", {
            className: " ",
            children: Object(u.jsx)("div", {
              className: " text-green-700 text-center",
              children: Object(u.jsx)("div", {
                children:
                  t &&
                  Object(u.jsx)(I.Elements, {
                    stripe: Je,
                    children: Object(u.jsx)(F, { totalprice: t, fullOrder: c }),
                  }),
              }),
            }),
          });
        },
        Ge = function (e) {
          var t = e.product,
            c = e.orders,
            i = P().user,
            n = t._id,
            r = t.img,
            a = (t.productId, t.productName),
            o = t.price,
            j = c.quantity,
            b = { userName: i.displayName, email: i.email },
            x = Object(s.useState)(b),
            h = Object(d.a)(x, 2),
            m = h[0],
            O = h[1],
            p =
              (Object(l.g)(),
              function (e) {
                var t = e.target.name,
                  c = e.target.value,
                  s = Object(y.a)({}, m);
                (s[t] = c), O(s);
              }),
            f = parseInt(o) * parseInt(j),
            g = Object(y.a)(
              Object(y.a)({}, m),
              {},
              {
                productName: a,
                singlePrice: o,
                quantity: j,
                totalPrice: f,
                status: !1,
                addToCartId: n,
              }
            );
          return Object(u.jsx)("div", {
            children:
              (null === t || void 0 === t ? void 0 : t.price) &&
              Object(u.jsxs)("div", {
                children: [
                  Object(u.jsx)("h1", {
                    className:
                      "text-center text-2xl text-indigo-900 font-semibold mb-12",
                    children:
                      " Please fill up all the necessary inputs for your Valuable order.",
                  }),
                  Object(u.jsxs)("div", {
                    className: "grid md:grid-cols-2 gap-8 px-4",
                    children: [
                      Object(u.jsxs)("div", {
                        className: "div p-8 border-2 ",
                        children: [
                          Object(u.jsx)("div", {
                            children: Object(u.jsx)("input", {
                              required: !0,
                              className:
                                "py-2 px-4 w-full text-lg border-2 border-black  rounded-md ",
                              name: "userName",
                              type: "text",
                              onBlur: p,
                              value: i.displayName,
                            }),
                          }),
                          " ",
                          Object(u.jsx)("br", {}),
                          Object(u.jsx)("div", {
                            children: Object(u.jsx)("input", {
                              required: !0,
                              className:
                                "py-2 px-4 w-full text-lg border-2 border-black    rounded-md ",
                              name: "email",
                              type: "email",
                              onBlur: p,
                              value: i.email,
                            }),
                          }),
                          Object(u.jsx)("br", {}),
                          Object(u.jsx)("div", {
                            children: Object(u.jsx)("input", {
                              required: !0,
                              className:
                                "py-2 px-4 w-full text-lg border-2 border-black    rounded-md",
                              name: "phone",
                              type: "number",
                              onBlur: p,
                              placeholder: "Your Phone",
                            }),
                          }),
                          " ",
                          Object(u.jsx)("br", {}),
                          Object(u.jsx)("div", {
                            children: Object(u.jsx)("input", {
                              required: !0,
                              className:
                                "py-2 px-4 w-full text-lg  border-2 border-black   rounded-md",
                              name: "address",
                              type: "text",
                              step: "0.01",
                              onBlur: p,
                              placeholder: "Your Address",
                            }),
                          }),
                          Object(u.jsx)("br", {}),
                          Object(u.jsx)("div", {
                            children: Object(u.jsx)("img", {
                              className: "m-auto block",
                              src: "data:image/jpeg;base64,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",
                              alt: "",
                            }),
                          }),
                          Object(u.jsx)("div", {
                            children: Object(u.jsx)(Fe, {
                              fullOrder: g,
                              totalprice: f,
                            }),
                          }),
                        ],
                      }),
                      Object(u.jsxs)("div", {
                        className: "px-2 md:px-4 py-6 border-2 text-lg",
                        children: [
                          Object(u.jsxs)("div", {
                            className: "lg:flex justify-between items-center",
                            children: [
                              Object(u.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                  Object(u.jsx)("img", {
                                    className: "w-24",
                                    src: r,
                                    alt: "",
                                  }),
                                  Object(u.jsx)("div", {
                                    className: "text-indigo-900 font-semibold",
                                    children: Object(u.jsxs)("p", {
                                      children: [" ", a],
                                    }),
                                  }),
                                ],
                              }),
                              Object(u.jsx)("div", {
                                className:
                                  "text-indigo-900 font-semibold text-right",
                                children: Object(u.jsxs)("p", {
                                  children: ["$ ", o],
                                }),
                              }),
                            ],
                          }),
                          Object(u.jsx)("div", {
                            className: "text-indigo-900 font-semibold",
                            children: Object(u.jsxs)("p", {
                              className: "text-right",
                              children: [" X ", j, " "],
                            }),
                          }),
                          Object(u.jsx)("hr", { className: "my-6" }),
                          Object(u.jsx)("div", {
                            className: "text-indigo-900 font-semibold",
                            children: Object(u.jsxs)("p", {
                              className: "text-right",
                              children: ["Total : $ ", f],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(u.jsx)("br", {}),
                ],
              }),
          });
        },
        Ve = function () {
          var e = Object(s.useState)({}),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1],
            n = Object(l.i)().addToCartId;
          console.log(n),
            Object(s.useEffect)(function () {
              var e = "http://localhost:5000/addToCart/".concat(n);
              fetch(e)
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return i(e);
                });
            }, []),
            console.log(c);
          var r = Object(y.a)({}, c);
          return Object(u.jsx)("div", {
            className: "py-24",
            children: Object(u.jsx)("div", {
              className: "container full-width-all mx-auto px-2",
              children: Object(u.jsx)(Ge, { product: c, orders: r }, c._id),
            }),
          });
        },
        Ze = function () {
          var e = Object(s.useState)({}),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1],
            n = Object(l.i)().productId;
          return (
            Object(s.useEffect)(function () {
              var e = "http://localhost:5000/products/".concat(n);
              fetch(e)
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return i(e);
                });
            }, []),
            Object(u.jsx)("div", {
              className: "py-24",
              children: Object(u.jsx)("div", {
                className: "container full-width-all mx-auto px-2",
                children: Object(u.jsx)(
                  Ge,
                  { product: c, orders: { quantity: "1" } },
                  c._id
                ),
              }),
            })
          );
        },
        Qe =
          (c(87),
          function (e) {
            var t = e.product,
              c =
                (t.CaseMetal, t.DisplayType, t.WaterResistance, t.description),
              i = (t.Warranty, Object(s.useState)(1)),
              n = Object(d.a)(i, 2),
              r = n[0],
              a = n[1],
              l = function (e) {
                a(e);
              },
              o = P().user,
              j = {
                displayName:
                  null === o || void 0 === o ? void 0 : o.displayName,
                email: null === o || void 0 === o ? void 0 : o.email,
              },
              b = Object(s.useState)(j),
              x = Object(d.a)(b, 2),
              h = x[0],
              m = x[1],
              O = function (e) {
                var t = e.target.name,
                  c = e.target.value,
                  s = Object(y.a)({}, h);
                (s[t] = c), m(s);
              };
            return Object(u.jsxs)("div", {
              className: "course-area-all ",
              children: [
                Object(u.jsx)("div", {
                  children: Object(u.jsxs)("ul", {
                    className: "course-tab-list",
                    children: [
                      Object(u.jsx)("li", {
                        className:
                          1 === r
                            ? "services-tabs services-active-tabs"
                            : "services-tabs",
                        onClick: function () {
                          return l(1);
                        },
                        children: "Description",
                      }),
                      Object(u.jsx)("li", {
                        className:
                          4 === r
                            ? "services-tabs services-active-tabs"
                            : "services-tabs",
                        onClick: function () {
                          return l(4);
                        },
                        children: "Review",
                      }),
                    ],
                  }),
                }),
                Object(u.jsxs)("div", {
                  className: "tab-content-container",
                  children: [
                    Object(u.jsx)("div", {
                      className:
                        1 === r
                          ? "services-tab-content services-tab-active-content"
                          : "services-tab-content",
                      children: Object(u.jsxs)("div", {
                        className: "p-4 md:p-8",
                        children: [
                          Object(u.jsx)("h2", {
                            className: "text-2xl mb-4 font-bold",
                            children: "Full Overview",
                          }),
                          Object(u.jsxs)("p", {
                            className:
                              "text-gray-500 text-base leading-8 text-justify",
                            children: [" ", c, " "],
                          }),
                        ],
                      }),
                    }),
                    Object(u.jsx)("div", {
                      className:
                        4 === r
                          ? "services-tab-content services-tab-active-content"
                          : "services-tab-content",
                      children: Object(u.jsx)("div", {
                        className: "p-4 md:p-8",
                        children: Object(u.jsxs)("form", {
                          onSubmit: function (e) {
                            var t = Object(y.a)({}, h);
                            fetch(" http://localhost:5000/reviews", {
                              method: "POST",
                              headers: { "content-type": "application/json" },
                              body: JSON.stringify(t),
                            })
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                console.log(e),
                                  e.insertedId &&
                                    alert(
                                      "successfully published your feedback."
                                    );
                              }),
                              e.preventDefault();
                          },
                          className: "register-form mt-6",
                          children: [
                            Object(u.jsx)("div", {
                              children: Object(u.jsx)("input", {
                                required: !0,
                                className:
                                  "py-2 px-4 w-full text-lg  rounded-md ",
                                name: "displayName",
                                type: "text",
                                onBlur: O,
                                placeholder: "Your Name",
                              }),
                            }),
                            " ",
                            Object(u.jsx)("br", {}),
                            Object(u.jsx)("div", {
                              children: Object(u.jsx)("input", {
                                required: !0,
                                className:
                                  "py-2 px-4 w-full text-lg  rounded-md ",
                                name: "email",
                                type: "email",
                                onBlur: O,
                                placeholder: "Your Email",
                              }),
                            }),
                            " ",
                            Object(u.jsx)("br", {}),
                            Object(u.jsx)("div", {
                              children: Object(u.jsx)("input", {
                                required: !0,
                                className:
                                  "py-2 px-4 w-full text-lg  rounded-md",
                                name: "rating",
                                type: "number",
                                step: "0.01",
                                onBlur: O,
                                min: "0",
                                max: "5",
                                placeholder: "Your rating ( 0 - 5 )",
                              }),
                            }),
                            " ",
                            Object(u.jsx)("br", {}),
                            Object(u.jsx)("div", {
                              children: Object(u.jsx)("textarea", {
                                required: !0,
                                className:
                                  "py-2 px-4 w-full text-lg  rounded-md",
                                name: "feedback",
                                type: "text",
                                onBlur: O,
                                placeholder: "Your feedback",
                              }),
                            }),
                            Object(u.jsx)("br", {}),
                            Object(u.jsx)("input", {
                              className:
                                "py-2 px-4 text-lg text-white rounded-md bg-indigo-900 cursor-pointer hover:bg-indigo-800",
                              type: "submit",
                              value: "Add Review",
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
        _e = function () {
          var e = Object(s.useState)({}),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1],
            n = Object(l.i)().productId;
          Object(s.useEffect)(function () {
            var e = "http://localhost:5000/products/".concat(n);
            fetch(e)
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return i(e);
              });
          }, []);
          var r = Object(s.useState)({}),
            a = Object(d.a)(r, 2),
            o = a[0],
            j = a[1],
            b = function (e) {
              var t = e.target.name,
                c = e.target.value;
              if (c > 0) {
                var s = Object(y.a)({}, o);
                (s[t] = c), j(s);
              } else j({});
            },
            x = Object(s.useState)(!1),
            h = Object(d.a)(x, 2),
            m = h[0],
            O = h[1];
          return Object(u.jsx)("div", {
            className: "py-24 ",
            children: Object(u.jsxs)("div", {
              className: "full-width-all container m-auto ",
              children: [
                Object(u.jsx)("div", {
                  children:
                    !m &&
                    Object(u.jsxs)("div", {
                      children: [
                        Object(u.jsxs)("div", {
                          className: "grid md:grid-cols-12 gap-x-8",
                          children: [
                            Object(u.jsx)("div", {
                              className: "div p-8 border md:col-span-5",
                              children: Object(u.jsx)("img", {
                                src: c.img,
                                alt: "",
                              }),
                            }),
                            Object(u.jsxs)("div", {
                              className: "p-8 border text-lg md:col-span-7",
                              children: [
                                Object(u.jsx)("h1", {
                                  className:
                                    "text-2xl font-semibold uppercase text-indigo-900 mb-2",
                                  children:
                                    null === c || void 0 === c
                                      ? void 0
                                      : c.productName,
                                }),
                                Object(u.jsxs)("p", {
                                  className: "text-gray-500 text-sm",
                                  children: [
                                    "Brand : ",
                                    null === c || void 0 === c
                                      ? void 0
                                      : c.model,
                                  ],
                                }),
                                Object(u.jsx)("br", {}),
                                Object(u.jsxs)("p", {
                                  className: "text-indigo-900 font-semibold",
                                  children: [
                                    "Rating ",
                                    null === c || void 0 === c
                                      ? void 0
                                      : c.rating,
                                    " ",
                                    Object(u.jsx)("i", {
                                      class: "fas fa-star text-yellow-500",
                                    }),
                                    " ",
                                  ],
                                }),
                                Object(u.jsx)("br", {}),
                                Object(u.jsxs)("h1", {
                                  className:
                                    "text-3xl font-bold text-indigo-900",
                                  children: [
                                    "$ ",
                                    null === c || void 0 === c
                                      ? void 0
                                      : c.price,
                                  ],
                                }),
                                Object(u.jsx)("br", {}),
                                Object(u.jsxs)("h1", {
                                  className: " ",
                                  children: [
                                    "Gender : ",
                                    Object(u.jsx)("span", {
                                      className:
                                        "text-indigo-900 font-semibold",
                                      children:
                                        null === c || void 0 === c
                                          ? void 0
                                          : c.Gender,
                                    }),
                                  ],
                                }),
                                Object(u.jsxs)("h1", {
                                  className: " ",
                                  children: [
                                    "Color : ",
                                    Object(u.jsx)("span", {
                                      className:
                                        "text-indigo-900 font-semibold",
                                      children:
                                        null === c || void 0 === c
                                          ? void 0
                                          : c.color,
                                    }),
                                  ],
                                }),
                                Object(u.jsxs)("h1", {
                                  className: " ",
                                  children: [
                                    "Stock :",
                                    Object(u.jsxs)("span", {
                                      className: (
                                        null === c || void 0 === c
                                          ? void 0
                                          : c.InStock
                                      )
                                        ? "text-indigo-900 font-semibold"
                                        : "text-red-700 font-semibold",
                                      children: [
                                        " ",
                                        (
                                          null === c || void 0 === c
                                            ? void 0
                                            : c.InStock
                                        )
                                          ? "Avaiable"
                                          : "Out of Stock",
                                      ],
                                    }),
                                  ],
                                }),
                                Object(u.jsx)("br", {}),
                                Object(u.jsx)("hr", {}),
                                Object(u.jsx)("br", {}),
                                Object(u.jsx)("p", {
                                  className: "text-gray-500",
                                  children:
                                    null === c || void 0 === c
                                      ? void 0
                                      : c.description,
                                }),
                                Object(u.jsx)("br", {}),
                                Object(u.jsx)("hr", {}),
                                Object(u.jsx)("br", {}),
                                Object(u.jsxs)("div", {
                                  className: "flex items-center ",
                                  children: [
                                    Object(u.jsx)("p", {
                                      children: "Quantity :",
                                    }),
                                    (
                                      null === c || void 0 === c
                                        ? void 0
                                        : c.InStock
                                    )
                                      ? Object(u.jsx)("input", {
                                          className:
                                            " w-24 ml-4 pl-4 py-1 border-2 border-black text-xl",
                                          name: "quantity",
                                          type: "number",
                                          min: "1",
                                          required: !0,
                                          onChange: b,
                                        })
                                      : Object(u.jsx)("input", {
                                          className:
                                            " w-24 ml-4 pl-4 py-1 border-2 border-gray text-xl cursor-not-allowed",
                                          disabled: !0,
                                          name: "quantity",
                                          type: "number",
                                          min: "1",
                                          required: !0,
                                          onClick: b,
                                        }),
                                  ],
                                }),
                                Object(u.jsx)("br", {}),
                                o.quantity
                                  ? Object(u.jsx)("button", {
                                      onClick: function () {
                                        return O(!0);
                                      },
                                      className:
                                        "transition w-3/4 mx-auto block  duration-500 bg-indigo-900 text-white px-12 py-2 rounded font-semibold hover:text-indigo-900 hover:bg-white   d-button-solid border-2 hover:border-indigo-900",
                                      children: " Buy Now",
                                    })
                                  : Object(u.jsx)("button", {
                                      title:
                                        "Please select your product quentity",
                                      disabled: !0,
                                      className:
                                        "transition cursor-not-allowed w-3/4 mx-auto block  duration-500 bg-gray-500 text-white px-12 py-2 rounded font-semibold  d-button-solid border-2 ",
                                      children: " Buy Now",
                                    }),
                              ],
                            }),
                          ],
                        }),
                        Object(u.jsx)("div", {
                          children: Object(u.jsx)(Qe, { product: c }, c._id),
                        }),
                      ],
                    }),
                }),
                Object(u.jsx)("div", {
                  children:
                    m &&
                    Object(u.jsx)(ze, {
                      children: Object(u.jsx)(
                        Ge,
                        { product: c, setOrderNow: O, orders: o },
                        c._id
                      ),
                    }),
                }),
              ],
            }),
          });
        },
        $e = c(25),
        et = function () {
          var e = Object(s.useState)(""),
            t = Object(d.a)(e, 2),
            c = t[0],
            i = t[1],
            n = Object(s.useState)([]),
            r = Object(d.a)(n, 2),
            a = r[0],
            l = r[1],
            o = Object(s.useState)(0),
            j = Object(d.a)(o, 2),
            b = j[0],
            x = j[1],
            h = Object(s.useState)(0),
            m = Object(d.a)(h, 2),
            O = m[0],
            p = m[1],
            f = Object(s.useState)(0),
            g = Object(d.a)(f, 2),
            v = g[0],
            A = g[1];
          Object(s.useEffect)(
            function () {
              var e = " http://localhost:5000/products?search="
                .concat(c, "&&page=")
                .concat(O, "&&size=")
                .concat(12);
              fetch(e)
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  l(e.products);
                  var t = e.count;
                  A(t);
                  var c = Math.ceil(t / 12);
                  x(c);
                }),
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            },
            [O, c]
          );
          return Object(u.jsxs)("div", {
            children: [
              Object(u.jsx)("div", {
                className: "text-center pb-2",
                children: Object(u.jsx)("input", {
                  type: "text",
                  className:
                    "py-2 px-3 text-lg border-black border md:w-1/2  mx-auto  my-6 rounded-full ",
                  placeholder: "Serch your choice...",
                  onChange: function (e) {
                    i(e.target.value), p(0);
                  },
                }),
              }),
              Object(u.jsx)("div", {
                children:
                  c &&
                  Object(u.jsx)("div", {
                    className: "pb-3",
                    children: Object(u.jsx)("div", {
                      children: Object(u.jsxs)("p", {
                        className: "",
                        children: [
                          Object(u.jsx)("span", {
                            className: "text-green-700 font-semibold",
                            children: "Showing Result",
                          }),
                          " : ",
                          Object(u.jsxs)("span", {
                            className: "font-semibold text-lg",
                            children: ['"', v, '"'],
                          }),
                          " items founded for ",
                          Object(u.jsxs)("span", {
                            className: "font-semibold text-lg",
                            children: ["'", c, "'"],
                          }),
                        ],
                      }),
                    }),
                  }),
              }),
              Object(u.jsx)("hr", {}),
              a
                ? Object(u.jsxs)("div", {
                    children: [
                      Object(u.jsx)("div", {
                        className: "pt-6",
                        children: Object(u.jsx)("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 px-2 ",
                          children: a.map(function (e) {
                            return Object(u.jsx)(ke, { product: e }, e._id);
                          }),
                        }),
                      }),
                      Object(u.jsx)("div", {
                        className: "pagination mt-12 text-center",
                        children: Object($e.a)(Array(b).keys()).map(function (
                          e
                        ) {
                          return Object(u.jsxs)(
                            "button",
                            {
                              className:
                                e === O
                                  ? "px-2 mx-2 border-2 rounded text-white bg-indigo-900 border-indigo-900"
                                  : " px-2 mx-2 border-2 rounded bg-gray-100 border-indigo-900",
                              onClick: function () {
                                return p(e);
                              },
                              children: [e + 1, " "],
                            },
                            e
                          );
                        }),
                      }),
                    ],
                  })
                : Object(u.jsx)("div", {
                    children: Object(u.jsx)("img", {
                      className: "m-auto w-20 mt-24 block",
                      src: M,
                      alt: "",
                    }),
                  }),
            ],
          });
        },
        tt =
          (c(88),
          function () {
            return Object(u.jsx)("div", {
              children: Object(u.jsx)("div", {
                className:
                  "full-width-all container m-auto py-6 min-h-screen\t",
                children: Object(u.jsx)(et, {}),
              }),
            });
          });
      var ct = function () {
          return Object(u.jsx)("div", {
            className: "App",
            children: Object(u.jsx)(m, {
              children: Object(u.jsxs)(a.a, {
                children: [
                  Object(u.jsx)(Re, {}),
                  Object(u.jsx)(Ke, {}),
                  Object(u.jsxs)(l.d, {
                    children: [
                      Object(u.jsx)(l.b, {
                        exact: !0,
                        path: "/",
                        children: Object(u.jsx)(Te, {}),
                      }),
                      Object(u.jsx)(l.b, {
                        exact: !0,
                        path: "/home",
                        children: Object(u.jsx)(Te, {}),
                      }),
                      Object(u.jsx)(l.b, {
                        exact: !0,
                        path: "/shop",
                        children: Object(u.jsx)(tt, {}),
                      }),
                      Object(u.jsx)(ze, {
                        exact: !0,
                        path: "/addToCart",
                        children: Object(u.jsx)(Ie, {}),
                      }),
                      Object(u.jsx)(l.b, {
                        exact: !0,
                        path: "/shop/:productId",
                        children: Object(u.jsx)(_e, {}),
                      }),
                      Object(u.jsx)(ze, {
                        exact: !0,
                        path: "/directOrder/:productId",
                        children: Object(u.jsx)(Ze, {}),
                      }),
                      Object(u.jsx)(ze, {
                        exact: !0,
                        path: "/addToCartOrder/:addToCartId",
                        children: Object(u.jsx)(Ve, {}),
                      }),
                      Object(u.jsx)(ze, {
                        exact: !0,
                        path: "/orderNow",
                        children: Object(u.jsx)(Ge, {}),
                      }),
                      Object(u.jsx)(l.b, {
                        exact: !0,
                        path: "/aboutUs",
                        children: Object(u.jsx)(g, {}),
                      }),
                      Object(u.jsx)(l.b, {
                        exact: !0,
                        path: "/contactUs",
                        children: Object(u.jsx)(v, {}),
                      }),
                      Object(u.jsx)(l.b, {
                        exact: !0,
                        path: "/login",
                        children: Object(u.jsx)(Xe, {}),
                      }),
                      Object(u.jsx)(l.b, {
                        exact: !0,
                        path: "/register",
                        children: Object(u.jsx)(He, {}),
                      }),
                      Object(u.jsx)(l.b, {
                        exact: !0,
                        path: "/forgatePass",
                        children: Object(u.jsx)(We, {}),
                      }),
                      Object(u.jsx)(l.b, {
                        exact: !0,
                        path: "/afterResetPass",
                        children: Object(u.jsx)(De, {}),
                      }),
                      Object(u.jsx)(ze, {
                        path: "/dashboard",
                        children: Object(u.jsx)(H, {}),
                      }),
                      Object(u.jsx)(ze, {
                        exact: !0,
                        path: "/addProducts",
                        children: Object(u.jsx)(k, {}),
                      }),
                      Object(u.jsx)(ze, {
                        exact: !0,
                        path: "/myOrders",
                        children: Object(u.jsx)(K, {}),
                      }),
                      Object(u.jsx)(ze, {
                        exact: !0,
                        path: "/manageOrders",
                        children: Object(u.jsx)(Y, {}),
                      }),
                      Object(u.jsx)(ze, {
                        exact: !0,
                        path: "/payment",
                        children: Object(u.jsx)(V, {}),
                      }),
                      Object(u.jsx)(ze, {
                        exact: !0,
                        path: "/orderNow/:paymentId",
                        children: Object(u.jsx)(V, {}),
                      }),
                      Object(u.jsx)(ze, {
                        exact: !0,
                        path: "/myReview",
                        children: Object(u.jsx)(U, {}),
                      }),
                      Object(u.jsx)(ze, {
                        exact: !0,
                        path: "/viewProfile",
                        children: Object(u.jsx)(Z, {}),
                      }),
                      Object(u.jsx)(ze, {
                        exact: !0,
                        path: "/manageProducts",
                        children: Object(u.jsx)(z, {}),
                      }),
                      Object(u.jsx)(l.b, {
                        path: "*",
                        children: Object(u.jsx)(Me, {}),
                      }),
                    ],
                  }),
                  Object(u.jsx)(Q, {}),
                ],
              }),
            }),
          });
        },
        st = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 96))
              .then(function (t) {
                var c = t.getCLS,
                  s = t.getFID,
                  i = t.getFCP,
                  n = t.getLCP,
                  r = t.getTTFB;
                c(e), s(e), i(e), n(e), r(e);
              });
        };
      r.a.render(
        Object(u.jsx)(i.a.StrictMode, { children: Object(u.jsx)(ct, {}) }),
        document.getElementById("root")
      ),
        st();
    },
  },
  [[89, 1, 2]],
]);
//# sourceMappingURL=main.56766198.chunk.js.map
