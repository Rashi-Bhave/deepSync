import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import {
  AiOutlinePlusCircle,
  AiFillCheckSquare,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { BsFiles } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "../components/screens.css";
import ReactPaginate from "react-paginate";
import { Icon } from "react-native-elements";
import ExpandButton from "../components/buttons/expandButton";
import Collapsible from "react-collapsible";
import { Collapse } from "react-collapse";

export default class ListView extends Component {
  constructor() {
    super();
    this.state = {
      expand: false,
      pageCount: 0,
      grid: false,
      list: true,
      offset: 0,
      tableData: [
        {
          ProjectName: "XXXX-XXXX-XXXX-XXXX-XXXX-XXXX",
          a: "XXXX-XXXX-XXXX",
          b: "XXXX-XXXX-XXXX",
          length: "4 mins",
          Created_On: "26-7-2021",
        },
        {
          ProjectName: "XXXX-XXXX-XXXX-XXXX-XXXX-XXXX",
          a: "XXXX-XXXX-XXXX",
          b: "XXXX-XXXX-XXXX",
          length: "4 mins",
          Created_On: "26-7-2021",
        },
        {
          ProjectName: "XXXX-XXXX-XXXX-XXXX-XXXX-XXXX",
          a: "XXXX-XXXX-XXXX",
          b: "XXXX-XXXX-XXXX",
          length: "4 mins",
          Created_On: "26-7-2021",
        },
        {
          ProjectName: "XXXX-XXXX-XXXX-XXXX-XXXX-XXXX",
          a: "XXXX-XXXX-XXXX",
          b: "XXXX-XXXX-XXXX",
          length: "4 mins",
          Created_On: "26-7-2021",
        },
        {
          ProjectName: "XXXX-XXXX-XXXX-XXXX-XXXX-XXXX",
          a: "XXXX-XXXX-XXXX",
          b: "XXXX-XXXX-XXXX",
          length: "4 mins",
          Created_On: "26-7-2021",
        },
        {
          ProjectName: "XXXX-XXXX-XXXX-XXXX-XXXX-XXXX",
          a: "XXXX-XXXX-XXXX",
          b: "XXXX-XXXX-XXXX",
          length: "4 mins",
          Created_On: "26-7-2021",
        },
        {
          ProjectName: "XXXX-XXXX-XXXX-XXXX-XXXX-XXXX",
          a: "XXXX-XXXX-XXXX",
          b: "XXXX-XXXX-XXXX",
          length: "4 mins",
          Created_On: "26-7-2021",
        },
        {
          ProjectName: "XXXX-XXXX-XXXX-XXXX-XXXX-XXXX",
          a: "XXXX-XXXX-XXXX",
          b: "XXXX-XXXX-XXXX",
          length: "4 mins",
          Created_On: "26-7-2021",
        },
      ],
      orgtableData: [],
      perPage: 3,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    var tdata = this.state.tableData;

    var slice = tdata.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(tdata.length / this.state.perPage),
      orgtableData: tdata,
      tableData: slice,
    });
  }
  onClick() {
    this.setState({
      expand: !this.state.expand,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconHeader}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              this.props.onClick();
            }}
          >
            <View style={styles.buttonContainer}>
              <AiOutlinePlusCircle
                color="white"
                style={{ width: 25, height: 25 }}
              />
              <Text style={styles.buttonText}>Add a new Project</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.iconContainer}>
            <BsFiles style={{ width: 20, height: 20, marginRight: "5%" }} />
            <RiDeleteBinLine style={{ width: 25, height: 25 }} />
          </View>
        </View>

        <ScrollView style={styles.listContainer}>
          <table>
            <thead style={{ backgroundColor: "white", height: "40px" }}>
              <th></th>
              <th className="project">Project Name</th>
              <th>Length</th>
              <th>Created On</th>
            </thead>
            <tbody>
              {this.state.tableData.map((tdata, i) => (
                <tr>
                  <td>
                    {<AiFillCheckSquare style={{ width: 30, height: 30 }} />}
                  </td>
                  <td>
                    <Collapsible
                      trigger={<ExpandButton tName={tdata.ProjectName} />}
                    >
                      <p>{tdata.a}</p>
                      <p>{tdata.b}</p>
                    </Collapsible>
                  </td>
                  <td>{tdata.length}</td>
                  <td>{tdata.Created_On}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={<MdKeyboardArrowLeft />}
            nextLabel={<MdKeyboardArrowRight />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages_pagination"}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: "72%",
    backgroundColor: "##F3F9FD",
    marginTop: "2%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    width: "20%",
    height: "100%",
    backgroundColor: "#12375C",
    alignItems: "center",
    justifyContent: "center",
  },
  iconHeader: {
    flexDirection: "row",
    height: "10%",
    justifyContent: "space-between",
    paddingHorizontal: "10%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    marginHorizontal: 10,
  },
  iconContainer: {
    flexDirection: "row",
    width: "10%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  listContainer: {
    maxHeight: "80%",
    width: "90%",
    alignSelf: "center",
    marginTop: "2%",
  },
});
