<h1 align="center">animelib<h3/>

<p align="center">
  Web application for browsing anime built with React and <a href="https://github.com/microsoft/fluentui">FluentUI</a>. 
  <br/>
  Inspired by an <a href="https://animelib.me/" target="_blank">original animelib</a>.
<p/>


### Motivation

> Originally this project contained only UML diagrams as a laboratory work at my university. I created [deployment](Docs/System%20Deployment%20Diagram.jpg), [activity](Docs/Upload%20new%20movie%20Activity%20Diagram.jpg) and [class](Docs/Project%20Domain%20Model.jpg) diagrams. But I decided to create a fully-working application to practice C# and try new technlogies on frontend. This application **doesn't match** the diagrams.


### App features

- Uses [clean architecture](https://github.com/jasontaylordev/CleanArchitecture/tree/main) on backend and [feature-sliced design](https://feature-sliced.design/) on frontend
- Authentication and authorization via [Auth0](https://auth0.com/)
- Database seeding via [Kitsu API](https://kitsu.docs.apiary.io/#)
- Anime bookmarking
- Fully responsive layout
- Real-time comment creation via [SignalR](https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction?view=aspnetcore-7.0)
  
### License

This project has a [MIT](LICENSE) license.
