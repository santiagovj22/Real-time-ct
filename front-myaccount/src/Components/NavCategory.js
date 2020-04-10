import React, { Component } from "react";
import "../desktop.css";
import ".././navegation.css";
import "../navegation-mobile.css";
import axios from "axios";

const arrayImagesCategories = [
  <a href="https://kiero.co/complete-category?id-26071-#Beb%C3%A9s">
    <img
      src="https://images.kiero.co/images/CAROUSEL/banners-categories/banners-categorias-03.webp"
      alt="bebes"
    />
  </a>,
  <a href="https://kiero.co/complete-category?id-14617-#Belleza%20y%20Cuidado%20Personal">
    <img
      src="https://images.kiero.co/images/CAROUSEL/banners-categories/banners%20categorias-11.webp"
      alt="belleza"
    />{" "}
  </a>,
  <a href="https://kiero.co/complete-category?id-28576-#C%C3%A1maras%20y%20Accesorios">
    <img
      src="https://images.kiero.co/images/CAROUSEL/banners-categories/banners%20categorias-09.webp"
      alt="camaras"
    />
  </a>,
  <a href="https://kiero.co/complete-category?id-25598-#Computaci%C3%B3n">
    <img
      src="https://images.kiero.co/images/CAROUSEL/banners-categories/banners%20categorias-04.webp"
      alt="computacion"
    />
  </a>,
  <a href="https://kiero.co/complete-category?id-27426-#Electrodom%C3%A9sticos">
    <img
      src="https://images.kiero.co/images/CAROUSEL/banners-categories/banners%20categorias-08.webp"
      alt="electrodomesticos"
    />
  </a>,
  <a href="https://kiero.co/complete-category?id-49955-#Electr%C3%B3nica,%20Audio%20y%20Video">
    <img
      src="https://images.kiero.co/images/CAROUSEL/banners-categories/banners%20categorias-13.webp"
      alt="electronica,audio y video"
    />
  </a>,
  <a href="https://kiero.co/complete-category?id-26914-#Hogar%20y%20Muebles">
    <img
      src="https://images.kiero.co/images/CAROUSEL/banners-categories/banners%20categorias-06.webp"
      alt="hogar y muebles"
    />
  </a>,
  <a href="https://kiero.co/complete-category?id-28581-#Juegos%20y%20Juguetes">
    <img
      src="https://images.kiero.co/images/CAROUSEL/banners-categories/banners%20categorias-15.webp"
      alt="juegos y juguetes"
    />{" "}
  </a>
];

class NavCategory extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      posts: [],
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  componentDidMount() {
    axios
      .get("https://kieroapi.net/parent/category")
      .then(response => {
        this.setState({
          posts: response.data.Resultados
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;

    const data = [
      posts[1097],
      posts[1103],
      posts[1565],
      posts[2048],
      posts[2621],
      posts[2635],
      posts[3647],
      posts[3960]
    ];

    const list = posts.length ? (
      data.map((post, i) => {
        const posttt = posts.filter(
          parent_id => parent_id.parent_id === post.id
        );
        return (
          <div className="nav-list" key={i}>
            <ul>
              <li>
                <a
                  key={i}
                  data-order={i}
                  href={
                    "https://listado.kiero.co/listcategory/?id-" +
                    post.id +
                    "/#" +
                    post.name
                  }
                >
                  {post.name}
                </a>
              </li>
              {showElements(posttt, post.name, i)}
            </ul>
          </div>
        );
      })
    ) : (
      <div className="products"></div>
    );

    const listCategoryFather = data.map((post, index) => {
      /******    const section to show every category for the 8 selected   ********/
      const posttt = posts.filter(parent_id => parent_id.parent_id === post.id);
      if (post === undefined) {
        return true;
      } else {
        //    ******    nameCategory gonna save the complete name from the API was consumed   ******    //
        let nameCategory = post.name;
        //******    The conditional it's to erase the complete name of two categories because it's so much long and can't fit   ******/
        if (
          post.name === "Belleza y Cuidado Personal" ||
          post.name === "Electrónica, Audio y Video"
        ) {
          nameCategory = post.name.split(" ")[0];
          //    ******    This conditional split the category name 'Electronica' because it's come from API with a comma    *****   //
          if (nameCategory === "Electrónica,") {
            nameCategory = nameCategory.split(",");
          }
        }
        //  return the section to gonna put in VirtualDom with it's name category
        return (
          <div className="col-sm father-category__title" key={index}>
            <p>{nameCategory}</p>
            {showChildsCategory(posttt, index)}
          </div>
        );
      }
    });

    return (
      <div className="headerContainerCategory">
        <div className="nav-set">
          <div className="nav-set-category">
            <button className="categoButton">Categoria</button>
            <div className="content-list-category" id="content-list-category">
              {list}
              <div className="nav-list">
                <ul>
                  <li>
                    <a href="https://www.kiero.co/category">
                      Ver mas Categorias
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-menu-wrapper">
            <ul className="row-categories__direction">{listCategoryFather}</ul>
          </div>
        </div>
      </div>
    );
  }
}

function showElements(arrayDates, index, pos) {
  /*****   declare a new array to not mutate the incoming array   *****/
  let arrayChildren = arrayDates;
  /*******     use to evaluate the array incoming     ************/

  if (arrayChildren === undefined) {
    return;
  } else {
    if (index >= 10) return;
    /******** this part make in the virtual DOM the interation of the every item child of it's father   ********/
    function title_format(title_format) {
      const title = title_format.toString().replace(/ /g, "-");
      return title;
    }

    return (
      <div className={index}>
        <nav className="sub-menu" id="sub-menu">
          {arrayImagesCategories[pos]}
          <ul className="sub-menu__container-items">
            {arrayChildren.map((children, index) => {
              /*****  conditional to show a limit of items childs in Virtual DOM  *******/
              if (index >= 9) {
                return true;
              } else {
                return (
                  <li
                    key={index}
                    className="sub-menu__container-items--line-text"
                  >
                    <a
                      href={
                        "https://listado.kiero.co/listcategory/?id-" +
                        children.id +
                        "//#" +
                        title_format(children.name)
                      }
                    >
                      {children.name}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

function showChildsCategory(childs, index) {
  /*****    Conditional to bring a limit to show elements in Virtual DOM    *******/
  if (childs === undefined) {
    return;
  } else {
    return (
      <div className="nav-list container-category__childs">
        <ul className="row">
          {childs.map((child, index) => {
            if (index >= 12) {
              return true;
            } else {
              //function for replace 'space' with '-' in the name of the category
              function title_format(title_format) {
                const title = title_format.toString().replace(/ /g, "-");
                return title;
              }
              //this return the categories child
              return (
                <li key={index} className="col-sm-3">
                  <a
                    href={
                      "https://listado.kiero.co/listcategory/?id-" +
                      child.id +
                      "//#" +
                      title_format(child.name)
                    }
                  >
                    {child.name}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default NavCategory;
