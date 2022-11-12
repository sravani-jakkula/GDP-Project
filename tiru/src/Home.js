import React, { Component } from 'react';


const { height, width } = Dimensions.get('window');

const apiUrl = "ENTER HERE" // CHANGE 

const loggedInUser = auth().currentUser.uid
const loggedInUserName = auth().currentUser.displayName;


/*-----------------------------STYLES-------------------------*/
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: "#ff9900"

  },
  headingText: {
    color: "white",
    fontFamily: "AvenirNext-Heavy",
    fontSize: 35
  },
  body: {
    backgroundColor: "white",
    flex: 10,
    justifyContent: 'flex-start'
  },
  eventList: {
    fontFamily: "Avenir Next",
    color: "white",
    fontSize: 17,
    alignSelf: 'center',
    justifyContent: "center",
    margin: 10
  },
  loading: {
    color: "black",
    fontFamily: "Avenir Next",
    fontSize: 25
  },
  avoider: {
    flex: 1,
    justifyContent: "flex-end"
  },
  joinContainer: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    borderTopWidth: 1,
    borderColor: "#ffaa00"
  },
  input: {
    flex: 7,
    margin: 4,
    backgroundColor: "white"
  },
  join: {
    flex: 3,
    backgroundColor: "#ffaa00",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    borderColor: "#ffaa00",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginLeft: 5
  },
  joinText: {
    color: "white",
    fontFamily: "Avenir Next",
    fontSize: 13
  },
  wrapper: {
    borderBottomWidth: 1,
    backgroundColor: "#ffaa00",
    borderColor: "#ff9900"
  },
  modal: {
    flex: 1
  },
  events: {
    flex: 7
  }
});
/*------------------------------------------------------------*/




export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: false,
      text: "",
      modalVisible: false,
      joinResponse: ""
    };
    this.getEvents = this.getEvents.bind(this);
    this.joinEvent = this.joinEvent.bind(this);
    this.navToEvent = this.props.navigation.navigate.bind(this);
  }

  getEvents() {
    fetch(`${apiUrl}/users/${loggedInUser}`)
      .then(res => res.json())
      .then(({ events, user }) => {
        events.sort((a, b) => Number(a.date.split(' ')[1].slice(0, -2)) - Number(b.date.split(' ')[1].slice(0, -2)))
        this.setState({
          events,
          user
        })
      })
  }


  componentDidMount() {
    this.getEvents();
  }

  joinEvent() {
    fetch(`${apiUrl}/users/${loggedInUser}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.text,
        username: loggedInUserName
      })
    })
      .then((response) => {
        var message = "Event joined!"
        if (response.status >= 400) {
          var message = "Event not found."
        }
        this.setState({
          text: "",
          joinResponse: message,
          modalVisible: true
        }, () => {
          setTimeout(() => {
            this.setState({
              modalVisible: false
            })
          }, 1000)
        })
        this.getEvents();
      })
      .catch((err) => console.log(err));
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>NOMinate</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.events}>
            <View style={styles.wrapper}>
              <Text style={styles.eventList}>Upcoming and Past Events</Text>
            </View>
            {!this.state.events ?
              <View style={{ alignSelf: 'center' }}>
                <Image style={{ width: 20, height: 20 }} source={{ uri: "https://media.giphy.com/media/L13CP4bQy0DgB1Zy2N/giphy.gif" }} />
              </View>
              : this.state.events.length ?
                <EventList navigation={this.navToEvent} events={this.state.events} />
                : <Text style={styles.loading}> Join or create an event! </Text>
            }
          </View>
          <View style={styles.joinContainer}>
            <View>
              <Modal
                style={{ flex: 0 }}
                animationType="fade"
                transparent={true}
                visible={this.state.modalVisible}
              >
                <View style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <View style={{ top: height * 0.845, width, height: height * 0.05, backgroundColor: "#ff9900", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 25, fontFamily: "Avenir Next", color: "white" }}>{this.state.joinResponse}</Text>
                  </View>
                </View>
              </Modal>
            </View>
            <TextInput style={styles.input}
              placeholder="Enter Event Code"
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text} />
            <TouchableOpacity onPress={this.joinEvent} style={styles.join}><Text style={styles.joinText}>Join Event!</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}