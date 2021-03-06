
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Card, Text, Button, Icon, Left, Body, Right,Input,InputGroup,Item,Col,Radio } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import SymptomList from '../SymptomList';
import styles from './styles';


class otherSymptoms extends Component {

  static propTypes = {
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor:'#F16C00'}}>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" />
            </Button>

          </Left>

          <Body>
            <Title>Other Symptoms</Title>
          </Body>
          <Right>
             <Button transparent onPress={() => Actions.login({ type: ActionConst.RESET })}>
              <Icon active name="power" />
            </Button>
          </Right>

        </Header>

        <Content>
            <Text style={styles.text}>
            Please list any other symptoms not mentioned above, and tick one box to show how
             they have affected you over the past week.
            </Text>

            <SymptomList />

            <Grid style={styles.buttons}>
                <Row>
                    <Col>
                        <Button rounded onPress={() => Actions.symptomsForm()} style={styles.button}>
                            <Text>Add</Text>
                        </Button>
                    </Col>
                </Row>
            </Grid>

            <Grid style={styles.buttons}>
                <Col>
                  <Button transparent onPress={() => Actions.qtwoTen()} style={styles.center}>
                      <Icon name='arrow-back' />
                  </Button>
                </Col>
                <Col>
                  <Button transparent onPress={() => Actions.qthree()} style={styles.center}>
                      <Icon name='arrow-forward' />
                  </Button>
                </Col>
            </Grid>

        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(otherSymptoms);
