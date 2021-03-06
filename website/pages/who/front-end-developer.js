/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const HomeSplash = require(`${process.cwd()}` + `/core/HomeSplash.js`);
const { Timeline, Timespot } = require(`${process.cwd()}` +
  `/core/Timeline.js`);

const Container = require("../../../../react-bootstrap/Container.js");
const Button = require("../../../../react-bootstrap/Button.js");

class FrontEndDeveloper extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const FrontEndDeveloperTimeline = () => (
      <Timeline>
        <Timespot>
          <h5>Background</h5>
          <p>
            We provides two different JavaScript libraries that you can work
            with to build user experiences for Substrate.
          </p>
          <p>
            The "Bonds" API is a ReactJS based library which makes it extremely
            simple to start new projects from existing templates. The
            Polkadot-API is a more traditional promised-based library which is a
            bit more robust and better documented for larger projects looking to
            build from the ground up. We will explore both on this journey.
          </p>
          <Button
            variant="secondary"
            href="https://github.com/paritytech/oo7/tree/master/packages/oo7-substrate"
            className="m-1 primary-color"
          >
            oo7-substrate
          </Button>
          <Button
            variant="secondary"
            href="https://github.com/polkadot-js/api/"
            className="m-1 primary-color"
          >
            polkadot-js/api
          </Button>
        </Timespot>
        <Timespot>
          <h5>Launch and Interact with the Substrate UI</h5>
          <p>
            The Substrate UI is a prebuilt template based on the oo7-substrate
            API. It is small, simple, and probably the fastest way to start
            hacking on Substrate user experiences. Clone the repository and
            follow the instructions to start the UI and connect to the public
            network. Then, start a local Substrate node and connect and interact
            with that. TODO: Tutorial.
          </p>
          <Button
            variant="secondary"
            href="https://github.com/paritytech/substrate-ui"
            className="m-1 primary-color"
          >
            Substrate UI
          </Button>
        </Timespot>
        <Timespot>
          <h5>Make Your First Substrate UI Component</h5>
          <p>To be created...</p>
          <Button variant="secondary" href="#" className="m-1 primary-color">
            TODO
          </Button>
        </Timespot>
        <Timespot>
          <h5>Launch and Interact with the Polkadot-JS Apps</h5>
          <p>
            The Polkadot-JS Apps (also called the Polkadot UI) is a feature
            packed product which uses the Polkadot-JS API. More to be added
            TODO.
          </p>
          <Button
            variant="secondary"
            href="https://github.com/paritytech/substrate-ui"
            className="m-1 primary-color"
          >
            Polkadot-JS Apps
          </Button>
        </Timespot>
        <Timespot>
          <h5>Build your first Polkadot-JS App</h5>
          <p>
            Now it is time to actually get your hands dirty and build your own
            "App" for the Polkadot UI. TODO
          </p>
          <Button
            variant="secondary"
            href="https://github.com/polkadot-js/apps/tree/master/packages/app-123code"
            className="m-1 primary-color"
          >
            App 123 Code TODO
          </Button>
        </Timespot>
        <Timespot>
          <h5>Buidl</h5>
          <p>
            You are now ready to start building your own user experiences! TODO
            community links
          </p>
          <Button
            variant="secondary"
            href="../../"
            className="m-1 primary-color"
          >
            Back to Home
          </Button>
        </Timespot>
      </Timeline>
    );

    return (
      <div>
        <HomeSplash
          siteConfig={siteConfig}
          language={language}
          title="Front-End Developer"
          tagline="So you wanna build amazing user experiences..."
          padding={0}
        />
        <Container>
          <FrontEndDeveloperTimeline />
        </Container>
      </div>
    );
  }
}

module.exports = FrontEndDeveloper;
