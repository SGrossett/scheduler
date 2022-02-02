# Interview Scheduler

With this application, a student can create, edit and delete interview appointments with a mentor.

## Final Product

#### Book, Remove & Edit Appointments
!["Project Demo"](https://github.com/SGrossett/scheduler/blob/master/docs/Project%20Demo.gif?raw=true)

#### Error Handling
!["Error Demo"](https://github.com/SGrossett/scheduler/blob/master/docs/Error%20Handling.gif?raw=true)

___


## Setup
1. Fork this respository, then clone the repo to your local working directory.
2. Fork the [scheduler-api repository](https://github.com/SGrossett/scheduler-api) that contains the database and clone it to your local host as well.
3. From the root directory of the project on your host machine (not Vagrant), execute `npm install` to install the dependencies
4. Run npm start to run the webpack development server (the process may take some time, so be patient)
5. Visit http://localhost:8000 in the browser
6. Enjoy the app!

___

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies

- Axios
- Classnames
- normalize.css
- React
- React-dom
- React-scripts