import React, {Component} from 'react';
import './App.css';
import './styles/appStyles.css'
import Table2 from './components/onlineLearn/Table2';
import Form2 from './components/onlineLearn/Form2';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      characters: []
    }
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  

  /* const something = [
    {
      name: "Charlie",
      job: "Janitor"
    },

    {
      name: "Mac",
      job: "Bouncer"
    },

    {
      name: "Dee",
      job: "Aspiring actress"
    },

    {
      name: "Dennis",
      job: "Bartender"
    }
  ] */

  render() {
    const {characters} = this.state

    return (

      <div className="App">
        {/*   <Greet name="Mike"/>
          
      <Message /> 
      <Welcome name="Bruce" heroName="BatMan" />
      <Counter />
      <Functionclick />
      <Classclick />
      <Eventbind/>
      <ParentComponent />
      <UserGreeting />  
      <NameList /> 
      <Stylesheet />
      <Inline /> 
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> 
      <Form />
      <LifecycleA />
      <LifecycleAupdate />
      <Fragmentdemo />
      <Table />
      <Purecomponent />
      <Parentcomponent />
      <RefsDemo /> 
      <FocusInput /> 
      <FRParentInput />
      <PortalDemo /> */}

        {/* The components are inserted within the error boundary
      component so that the error handling can be implemented in them.
      Instead of wrapping the error boundary around all the components
      together, it is better to wrap it around each component, so that
      it is only the component that throws an error that will be hidden
      and the others can be displayed normally */}
        {/* <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        <Hero heroName="Joker" />
      </ErrorBoundary>

      <ErrorBoundary><Hero heroName="Batman" /></ErrorBoundary>
      <ErrorBoundary><Hero heroName="Superman" /></ErrorBoundary>
      <ErrorBoundary><Hero heroName="Joker" /></ErrorBoundary>
      <ClickCounter /> 
      <HoverCounter /> 
      <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLoggedIn) => isLoggedIn ? "Mikael" : "Guest"} /> 
      <Counter2 render={(count, incrementCount) => <ClickCounter2 count={count} 
      incrementCount={incrementCount} />}/>
      <Counter2 render={(count, incrementCount) => <HoverCounter2 count={count}
        incrementCount={incrementCount} />} /> */}

        {/* the value property is consumed by componentC and any 
        nested component within componentC */}

        {/* <UserProvider value="Mikael">
          <ComponentC />
        </UserProvider> */}


        <p>Add a character with a name and a job to the table</p>
        <Table2 characterData={characters} removeCharacter={this.removeCharacter} />
        <Form2 handleSubmit={this.handleSubmit} />

      </div>
    );
  }
  
}

export default App;
