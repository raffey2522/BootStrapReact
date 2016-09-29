import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import {Button,ButtonGroup,Form,FormGroup,
  ControlLabel,FormControl,HelpBlock,
  Checkbox,Radio,Grid,Row,Col} from 'react-bootstrap';

class App extends Component {
  
  state = {
    name:"",
    color:"",
    movies:[],
    gender:"",
    school:"",
    foods:[],
    feeling:""
  };

/*--------------------*/  
  onChange = (fieldName)=>{
    return (event)=>{
      var state = this.state;
      state[fieldName]=event.target.value;
      this.setState(state);
    }
  };

  checkboxChange = (fieldName)=>{
    return (event)=>{
      var targetArray = this.state[fieldName];
      if (targetArray.indexOf(event.target.value)>=0)
      targetArray.splice(
        targetArray.indexOf(event.target.value), 
        1
      );
      else
        targetArray.push(event.target.value);
        
        var state = this.state;
        state[fieldName]=targetArray;
        this.setState(state);
    }
  };

  
  
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h2>I Have a Student, I Have a Survey, UGHHH... STUDENT SURVEY!!!</h2>
        </div>
        <p className="jumbotron">
        <Grid>
          <Row>
            <Col md={6}>
        <FormGroup>
            <ControlLabel> Name please . . . </ControlLabel>
            <FormControl type="text" 
            placeholder="Name here..."
            value={this.state.name}
            onChange={this.onChange('name')}/>
            <HelpBlock> Use to Identify You... (ex. Rody Duterte)</HelpBlock>
        </FormGroup>
        
        <FormGroup>
            <ControlLabel> Choose Favorite Color . . . </ControlLabel>
            <FormControl componentClass="select"
            placeholder="Color"
             value={this.state.color}
            onChange={this.onChange('color')}>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            </FormControl>
            
            <HelpBlock> Use to Identify You... (ex. *select Green)</HelpBlock>
        </FormGroup>
        
        <FormGroup>
            <ControlLabel>Favorite Movies</ControlLabel>
              <Checkbox value="Hunger Games" 
                        checked={this.state.movies.indexOf('Hunger Games')>=0 ? true:false}
                        onChange={this.checkboxChange('movies')}>
                  Hunger Games
              </Checkbox>
              <Checkbox value="Harry Potter" 
                        checked={this.state.movies.indexOf('Harry Potter')>=0 ? true:false}
                        onChange={this.checkboxChange('movies')}>
                  Harry Potter
               </Checkbox>
               <Checkbox value="Lord of the Rings" 
                        checked={this.state.movies.indexOf('Lord of the Rings')>=0 ? true:false}
                        onChange={this.checkboxChange('movies')}>
                  Lord of the Rings
               </Checkbox>         
        </FormGroup>
        
        <FormGroup>
            <ControlLabel>Gender</ControlLabel>
              <Radio name="gender" value="Male"
              onChange={this.onChange('gender')}>Male</Radio>
              <Radio name="gender"value="Female"
              onChange={this.onChange('gender')}>Female</Radio>
              <Radio name="gender" value="Uni"
              onChange={this.onChange('gender')}>Uni</Radio>
        </FormGroup>
        
        <FormGroup>
            <ControlLabel>Current School Attending</ControlLabel>
            <FormControl type="text" 
            placeholder="Type here..."
            value={this.state.school}
            onChange={this.onChange('school')}/>
            <HelpBlock> Use to Identify You... (ex. Up Diliman Campus)</HelpBlock>
        </FormGroup>
        
        <FormGroup>
            <ControlLabel>Foods</ControlLabel>
              <Checkbox value="Fries" 
                        checked={this.state.foods.indexOf('Fries')>=0 ? true:false}
                        onChange={this.checkboxChange('foods')}>
                  Fries
              </Checkbox>
              <Checkbox value="Burger" 
                        checked={this.state.foods.indexOf('Burger')>=0 ? true:false}
                        onChange={this.checkboxChange('foods')}>
                  Burger
               </Checkbox>
               <Checkbox value="Pizza" 
                        checked={this.state.foods.indexOf('Pizza')>=0 ? true:false}
                        onChange={this.checkboxChange('foods')}>
                  Pizza
               </Checkbox>
               <Checkbox value="Sandwitch" 
                        checked={this.state.foods.indexOf('Sandwitch')>=0 ? true:false}
                        onChange={this.checkboxChange('foods')}>
                  Sandwitch
               </Checkbox>
          
        </FormGroup>
        
        <FormGroup>
            <ControlLabel>Current Feelings</ControlLabel>
              <Radio name="feeling" value="Happy"
              onChange={this.onChange('feeling')}>Happy</Radio>
              <Radio name="feeling"value="Sad"
              onChange={this.onChange('feeling')}>Sad</Radio>
              <Radio name="feeling" value="Half-Happy/Sad"
              onChange={this.onChange('feeling')}>Half-Happy/Sad</Radio>
        </FormGroup>
          <ButtonGroup>
          <Button bsStyle="info">
          <span className="glyphicon glyphicon-info-sign"></span>
           &nbsp;Info Button</Button>
          <Button bsStyle="primary">
          <span className="glyphicon glyphicon-pushpin"></span>
           &nbsp;Primary Button</Button>
          <Button bsStyle="warning">
          <span className="glyphicon glyphicon-warning-sign"></span>
           &nbsp;Warning Button</Button>
          <Button bsStyle="danger">
          <span className="glyphicon glyphicon-fire"></span>
           &nbsp;Danger Button</Button>
          </ButtonGroup>
          </Col>
            <Col md={6}>
            <strong>Name is: </strong>{this.state.name}<br/><br/><br/><br/><br/>
            <strong>Color is: </strong>{this.state.color}<br/><br/><br/><br/><br/>
            <strong>Favorite Movie/s: </strong>{
              this.state.movies.map((item,i)=>{
                return <div><span className="label label-primary">{item}</span></div>
              })
              }<br/><br/>
            <strong>Gender is: </strong>{this.state.gender}<br/><br/><br/>
            <strong>Name of School is: </strong>{this.state.school}<br/><br/><br/><br/><br/>
            <strong>Favorite Food/s: </strong>{
              this.state.foods.map((item,i)=>{
                return <div><span className="label label-info">{item}</span></div>
              })
              }<br/><br/>
              <strong>Current Feeling is: </strong>{this.state.feeling}<br/><br/><br/>
            </Col>         
          </Row>
        </Grid>
        
        </p>
      </div>
    );
  }
}

export default App;
