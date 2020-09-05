# spacex-app (RockLauncher)

GraphQL based [client](https://rocklauncher.vimalshah77.now.sh) for desktops that allows one to analyze all historical Space X launches

## Features

- Provides graphs for historical launches, and various orbital metrics, e.g., [eccentricity](https://rocklauncher.vimalshah77.now.sh/launches-over-time#eccentricity), [period](https://rocklauncher.vimalshah77.now.sh/launches-over-time#period), [inclination](https://rocklauncher.vimalshah77.now.sh/launches-over-time#inclination)  and more!
- Allows user to search, filter, sort, all launches based on country, year of launch, payload type/weight and failures
- The data for this client : SpaceX's [GraphiQL playground](https://api.spacex.land/graphql)

## Tech Stack
- React
- Apollo 
- Material UI 
- React Router
- recharts - charting library
- Sentry - logging bugs
- Font Awesome

## Device Support

- Currently the experience is best on a desktop with a resolution of 1920x1080.

## Installing and Running

To install: 

```bash
$ npm install
```

To run a local development server:

Using npm:

```bash
$ npm start
```

## Design / Implementation

The overall approach to this project has been broken down into the following steps:

1. Research
2. Design
3. Implementation
4. User Testing

### Research

The GraphQL Space X endpoint was used. This required understanding the data. It was important to understand what data was available, how it could be used in problem formulation and in providing a solution. Once this was thoroughly investigated and researched, (thank the stars for GraphiQL!) I was one step closer to the goal.

Given the vast amount of data provided, my first thoughts were that charts representing this data would be a cool touch. I wanted to plot things as I like to visualize data. In the charts, we can see that the Periapsis is fairly bi-modal. I would never had been able to grasp that from a tabular or a JSON representation. Temporal data seems like the low hanging fruit and after some digging, a few endpoints were found.

The data lent itself well to also being the basis for meeting the requirements of searching, sorting and filtering.

### Design

After a few mock in Figma, the vision was a dashboard for an employee at Space X. This employee would be looking at historical launch data, looking for correlations, or anything that might look off. The employee could also gain an insight into which countries Space X was working with. 

### Implementation

Which tools would best for a quick prototype? In this case, React, Apollo and Material UI were chosen. No need to justify React. Apollo made queries a breeze with their Query component. MUI provided many components out of the box and allowed one to focus on the business logic. I was at times torn as where to have the CSS - should it be in the component like a CSS-in-JS solution or a SASS external file? This solution used a mixture of both.

The component hierarchy was next. What would be a good way to structure the components so that another person could create the mental model of the app easily? I'm not sure if I nailed this, however, using `context` and `userReducer` allowed for minimal prop passing. This allowed the components to stay fairly clean and the structure is DOM-like. Initial performance tests didn't show any major lag. More memoization might be necessary.

Each component had a test to accompany it. While this test is rudimentary (basic smoke and snapshot), having a test-first strategy did find bugs early on. These tests are FAR from being complete and in the future I would create more exhaustive ones to take their place.  

Lastly, it was time to kick off the implementation cycle: Build, Measure and Learn. The faster I got at going around this loop, the faster these prototypes were produced.

### User Testing

After enough of the app was in place, I "hired" a user tester [ my girlfriend :) ] She was great at providing an alternate lense. In the future, I would like to get more user testing done and use Krug's "Don't Make Me Think" paradigm. For myself, his process is bar-none.

### Future Work

1. Increase targeted medias and resolution for more than just desktop. As people are on the move, mobile is practically a body part. Investigate native vs PWA.
2. Search is currently a search over the countries. Expand search to include other fields like rocket name, year of launch, orbital metrics, etc
3. Since the persona is a Space X employee, ideally, being able to update the data (mutations) would be needed. This would allow for updates/corrections to the data. Along with this, being able to submit tickets, e.g. JIRA integration.
4. As features grow, more documentation will be needed. Getting a wiki (GitHub) or a Gatsby page set up would be good to have.
5. Add authentication. Most of the companies that use SpaceX are government contractors and would require secure login and 2FA at a minimum. Something with AES256.
6. Investigate iframe video playback errors around the AdBlocker 
7. Improve overall style consistency between filters and search/sort
8. Decrease sorting delay by implementing local sorting
9. Improve CSS class naming convention to align with BEM
10. Improve UX by loading state from the URL search params on page refresh or page return
11. Increase testing types and increase testing coverage. Add Enzyme to expand Jest's testing capabilities.
12. Smarter pagination. User is on page 8 of 10 and hits a filter knob. This filtering drops the content to span 4 pages. Instead of going back to page 1 (current functionality) it should go back to page 4.
13. Add smoothing, averaging, filtering and common statistics (mean, sd, variance) to the graph.
14. Investigate how to make the href in anchor tags acceptable in the console.logs
