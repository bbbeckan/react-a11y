import './App.css';
import { Route, Switch } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function PageHome () {
  const mainRef = useRef();
  const pRef = useRef();

  useEffect(() => {
    console.log(mainRef);
    setTimeout(() => {
      mainRef?.current?.focus();
    }, 800);

    setTimeout(() => {
      pRef?.current?.focus();
    }, 900);
  }, [mainRef]);

  return (
    <div>
      <h1 ref={mainRef} tabIndex={-1}>Home</h1>
      <p ref={pRef}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec pellentesque orci. Sed hendrerit tincidunt sem sit amet lacinia. Cras lacinia risus a dolor rhoncus scelerisque non eu turpis. Morbi ullamcorper sed dolor sed varius. Praesent ac placerat dolor. In ac nisi et turpis viverra dictum non nec tellus. Sed at ornare tellus. Etiam lobortis sem a orci suscipit rhoncus. Duis bibendum lacinia enim et viverra. Pellentesque bibendum faucibus tellus, sed imperdiet metus viverra sed. Proin tempus eros nec orci finibus faucibus. Nam sed accumsan diam. Aenean ultrices hendrerit ligula id aliquet. Quisque feugiat libero ut turpis egestas consequat. Morbi id sodales lorem. </p>
      <p>Aenean eu odio tincidunt, consequat sem sit amet, accumsan lacus. Quisque faucibus gravida sapien, a pellentesque est pretium in. Nulla pellentesque massa nec purus aliquet, a ultrices libero rutrum. Maecenas orci elit, gravida ac vulputate ut, varius at orci. Mauris at nisl nec sem convallis mollis sit amet vestibulum mauris. Praesent bibendum metus in ante fermentum sagittis. In eget eros id metus faucibus tristique. Suspendisse nisl urna, euismod sit amet sodales eget, volutpat eu mauris. In quis ultricies risus. Duis orci purus, porta ut accumsan maximus, sollicitudin non risus. Suspendisse nec dolor venenatis, sagittis velit in, sollicitudin justo. Phasellus tempus enim vel purus lobortis, vitae consequat sapien aliquet. Curabitur a tincidunt magna, nec fermentum leo. Pellentesque bibendum vulputate ligula. </p>
      <p>Morbi sit amet lorem in tortor consequat dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam posuere sem non eros scelerisque elementum. Mauris viverra tincidunt metus, nec mattis massa ornare nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc convallis, augue sit amet porta porttitor, arcu magna malesuada risus, viverra sagittis ligula erat vel ante. Aliquam ultricies vehicula quam ac lacinia. Praesent et volutpat arcu. Nam ornare, magna sit amet consequat volutpat, erat sem facilisis sem, non suscipit mi sem a odio. Donec dapibus massa et purus cursus pulvinar. Suspendisse ut dolor hendrerit, sodales neque vitae, egestas ex. Integer lobortis eleifend diam. Nulla facilisi. Pellentesque porta interdum nisl sed ullamcorper. </p>
    </div>
  );
}

function PageSettings () {
  const mainRef = useRef();

  useEffect(() => {
    console.log(mainRef);
    setTimeout(() => {
      mainRef?.current?.focus();
    }, 800);
  }, [mainRef]);

  return (
    <div ref={mainRef} tabIndex={-1}>
      <h1>Settings</h1>
    </div>
  );
}

function App() {
  const history = useHistory();

  function onClickHome () {
    document.getElementById('sr').innerHTML = 'GOING TO HOME AND THE FOCUS THE HEADING';
    history.push('/');
  }

  function onClickSettings () {
    document.getElementById('sr').innerHTML = 'GOING TO SETTINGS AND THE FOCUS THE HEADING';
    history.push('/settings');
  }

  return (
    <div className="App">
      <nav>
        <button onClick={onClickHome}>Home</button>
        <button onClick={onClickSettings}>Settings</button>
      </nav>
      <Switch>
        <Route path="/settings" component={PageSettings} />
        <Route path="*" component={PageHome} />
      </Switch>
    </div>
  );
}

export default App;
