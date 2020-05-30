import React,{Component} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import About from './Routing/About';
import Menu from './Routing/Menu';
import Contact from './Routing/Contact';
import Home from './Routing/Home'; 
import PageNotFound from './Routing/PageNotFound'
import Person from './Class-component/Person';
import Employee from './Functional-component/Employee';
import Bird from './Class-component/State/Bird';
import Employee1 from './Class-component/Event-handling/Employee1';
import Car from "./Class-component/setState/Car";
import Shop from "./Children/Shop";
import Fruit from './Table/Fruit';
import Error from './Error-Boundries/Error';
import FoodItem from './Error-Boundries/FoodItem';
import HoverCounter from './HOC/HoverCounter';
import ButtonCounter from './HOC/ButtonCounter'
//import Bird from './Class-component/Bird';
//import Car from './Functional-component/Car';
//import Employee from './Table/Employee-image';
//import Fruit from './Class-component/State/Fruit';
import Student from './Table/Student';
import Flower from './Functional-component/Flower';
import Registration from './Form-Validation/Registration';
import HookCounterUseState from './Hooks/useState Hooks/HookCouterUseState';
import HookCounterPreviousState from './Hooks/useState Hooks/HookCounterPreviousState';
import UseStatewithArray from './Hooks/useState Hooks/UseStatewithArray';
import HookCounter1 from './Hooks/useEffect Hooks/HookCounter1';
import HookMouse from './Hooks/useEffect Hooks/HookMouse';
import MouseContainer from './Hooks/useEffect Hooks/MouseContainer' ;
import DataFetching from './Hooks/useEffect Hooks/dataFetching';
import ComponentA from './Hooks/useContext/ComponentA';
import ComponentB from './Hooks/useContext/ComponentB';
import ComponentC from './Hooks/useContext/ComponentC';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const valueContext = React.createContext();
export const myOwnContext = React.createContext();
export default class App extends Component {
  render(){
    this.state ={
      name:'Hello World!!!',
      value:10
    }
  
  return (
    <div>
      <Person/> 
      <Employee/>
      <Bird/>
      <Employee1/>
      <Car/>
      <Shop name="Villege HyperMarket" location="HSR">Please Visit our HyperMarket</Shop>
      <Fruit/>
        {/* <Error>
          <FoodItem item ='Rice'/>
        </Error>
        <Error>
          <FoodItem item ='Pulses'/>
        </Error>
        <Error>
          <FoodItem item ='Other'/>
        </Error>
        <Error>
          <FoodItem item ='Jowar'/>
        </Error> */}
         <Bird name="Sparrow" color="white"/>
        <Bird/>
        <Bird/>
        <Car/> 
        <Employee/> 
        <Fruit/>
        <Student/> 
        <Flower name="Rose" color='Pink'/>
        <Flower name='Lotus' color='Blue'>I live in Water</Flower> */}
         <BrowserRouter>
        <Menu/>
        <Switch>
        <Route path = "/" exact component={Home}/>
        <Route path = "/about" component={About}/>
        <Route path = "/contact"component={Contact}/>
        <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
      <Registration/>
      <HookCounterUseState/>
      <HookCounterPreviousState/>
      <UseStatewithArray/>
      <HookCounter1/>
      <HookMouse/>
      <MouseContainer/>
      <DataFetching/>
      <UserContext.Provider >
        <ChannelContext.Provider value={'Chauhan'}>
          <valueContext.Provider>
          </valueContext.Provider>
					<ComponentC />
          <ComponentB/>
				</ChannelContext.Provider>
			</UserContext.Provider>
      <myOwnContext.Provider value={this.state.name}>
        <ComponentC/>
      </myOwnContext.Provider>
      <HoverCounter name="Mohan"/>
      <ButtonCounter name="Mohan"/>
      </div>
  );
}
}
