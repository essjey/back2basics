import React from "react";

const htmlCssEx = () => {
  return (
    <div>
      <h1>Hello World News</h1>
      <section className="flex row-1">
        <div className="column-1">
          <h3>News article one</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            possimus fuga enim ipsum accusamus iure dolore est deserunt nemo
            odio inventore, minima aliquid consequatur eos illo vel sequi,
            officia ipsam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            possimus fuga enim ipsum accusamus iure dolore est deserunt nemo
            odio inventore, minima aliquid consequatur eos illo vel sequi,
            officia ipsam!
          </p>
        </div>
        <div className="column-2">
          <h3>BREAKING: Puppies Are Adorable</h3>
          <img
            src="http://placecorgi.com/500/300"
            alt="I &lt;3 Dogs"
            className="corg-img"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe
            ad ut voluptatum dolorum consequuntur eos ex dolorem alias dicta
            provident animi accusantium voluptate aperiam, ducimus quaerat, eum
            odit. Mollitia quae voluptas praesentium cupiditate, tempore
            expedita placeat dicta, architecto illo tenetur soluta fugiat quas
            consequatur eius accusantium porro nisi ducimus, repellat fuga!
            Aliquam beatae assumenda at labore, dolor nisi placeat, omnis, totam
            fugit neque natus ratione necessitatibus voluptas nihil corrupti
            iusto! Illum ipsa illo consequatur, quos alias id vero quam.
          </p>
        </div>
        <div className="column-3">
          <h3>News article one</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            possimus fuga enim ipsum accusamus iure dolore est deserunt nemo
            odio inventore, minima aliquid consequatur eos illo vel sequi,
            officia ipsam!
          </p>
        </div>
      </section>

      <section className="flex row-2">
        <div className="column-1">
          <h3>Boy Wants Dog</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            vero magnam nisi, laborum sit nam neque ipsum animi nemo expedita a
            dignissimos dolorem labore repudiandae itaque earum eos ullam
            facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            vero magnam nisi, laborum sit nam neque ipsum animi nemo expedita a
            dignissimos dolorem labore repudiandae itaque earum eos ullam
            facere.
          </p>
        </div>
        <div className="column-2 flex">
          <ul className="flex column">
            <li>Politics</li>
            <li>Technology</li>
            <li>Local</li>
            <li>Opinion</li>
            <li>Sports</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default htmlCssEx;
