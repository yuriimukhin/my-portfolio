import { string } from 'prop-types';
import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import './App.less';
//import CodeMirror from 'codemirror';
import Header from './Header';
import Spinner from './shared/Spinner';
import { getDescription, getTitle, store } from './store';
//import "codemirror/mode/javascript/javascript";


function App(props) {
  // store value as selector
  const title = useSelector((state) => state?.hello.title);

  // store value as props to component
  const { description } = props;

  useEffect(() => {
    store.dispatch(getTitle());
    store.dispatch(getDescription());

    // CodeMirror(document.getElementById('code'), {
    //   lineNumbers: true,
    //   value: ` 

    //   // Your First Program

    //   class HelloWorld {
    //       public static void main(String[] args) {
    //           System.out.println("Hello, World!"); 
    //       }
    //   }
    //   `,
    //   mode: 'javascript',
    //   readOnly: true,
    //   theme: 'ayu-mirage',
    //   autocorrect: true,
    // });

    // CodeMirror.fromTextArea(document.getElementById('code'), {
    //   lineNumbers: true,
    //   mode: 'javascript',
    //   value:'function myScript(){return 100;}\n'
    //   //readOnly: true,
    //  // theme: 'lesser-dark',
    // });
  }, []);

  return (
    <>
      <Spinner />
      <Header />
      <div className="layout">
        <div className="content">
          <h1>{title}</h1>
          <h2>{description}</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, lacus non congue tincidunt, eros augue
            vulputate tortor, at vulputate quam velit vitae tellus. Duis nec mauris iaculis, efficitur turpis vel, convallis
            purus. Praesent tempus sodales magna, non tincidunt ligula varius a. Duis et ultricies tortor. Sed aliquam risus vitae
            magna bibendum vehicula. Sed eu dui ligula. Nam ut dolor iaculis, porta libero ac, fringilla elit.
          </p>

          <button type="button">Contant</button>

          <div id="code" />

          <div className="thumbnails-row">
            <div className="thumbnail">
              <h2> Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, lacus non congue tincidunt, eros augue
                vulputate tortor, at vulputate quam velit vitae tellus.
              </p>
            </div>
            <div className="thumbnail">
              <h2>Bibendum vehicula</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, lacus non congue tincidunt, eros augue
                vulputate tortor, at vulputate quam velit vitae tellus.
              </p>
            </div>
            <div className="thumbnail">
              <h2>Sed eu du</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, lacus non congue tincidunt, eros augue
                vulputate tortor, at vulputate quam velit vitae tellus.
              </p>
            </div>
            <div className="thumbnail">
              <h2>Porta libero</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, lacus non congue tincidunt, eros augue
                vulputate tortor, at vulputate quam velit vitae tellus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

App.propTypes = {
  description: string,
};

App.defaultProps = {
  description: '',
};

function mapStateToProps(state) {
  return { ...state.hello };
}

export default connect(mapStateToProps)(App);
