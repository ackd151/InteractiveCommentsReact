# InteractiveCommentsReact

## React implementation of [Frontend Mentor](https://www.frontendmentor.io/home) [Interactive Comments challenge](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9)

This is simple implementation of an interactive comments component.
It does not have a backend/persistence mechanism as that would be overkill for this challenge.

### Motivation:

Built this simple Frontend Mentor challenge using React for personal edification.
While some use of hooks weren't the most logical way to implement the necessary functionality, it provided value as a learning experience.

### Tools:

React, Node/js, HTML, CSS, Git/gh-pages

### Lessons:

- 6-P's, proper planning prevents piss-poor performance...
  Shotgun approach leads to many refactors and in the case of this app, unnecessary/illogical prop-drilling/state-lifting.
  Then again, there's tremendous value in having to dig yourself out of holes you burried yourself in.
- The repsonsive layouts provided by Freontend Mentor changed the ordering of UI elements which I had separated/grouped into React components. So, instead of changing flex order for example, I had to pull the element out of the document flow and place them using position:absolute. Next time pay attention to element positioning on different screen sizes ahead of time.
- Had many issues serving static images. Everything seemed to be sorted in development, but broke completely during build/deployment to gh-pages. Will look into importing them directly into the components instead so webpack picks them up(? Stack overflow suggestion...).
- Deployment itself was a bit odd. While troubleshooting the broken images issue, changes were not reflecting in the deployed build. Finally, deleting the build folder entirely before running build/deploy fixed it instantly.
