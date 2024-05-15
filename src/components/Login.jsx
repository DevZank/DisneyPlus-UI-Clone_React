import styled from "styled-components";

function Login(props) {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjc2IDY0Ij48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbC1ncmFkaWVudCIgY3g9Ii0xNjAuNzEiIGN5PSI0MTYuNDciIHI9IjIuNzEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMzEuNDgsIDAsIDAsIC0zMS40OCwgNTIzNC4zLCAxMzE0MS44NikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAuMDYiIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjAuMDgiIHN0b3AtY29sb3I9IiNjYmZmZmYiLz48c3RvcCBvZmZzZXQ9IjAuMSIgc3RvcC1jb2xvcj0iIzk2ZmZmZiIvPjxzdG9wIG9mZnNldD0iMC4xMiIgc3RvcC1jb2xvcj0iIzY4ZmZmZiIvPjxzdG9wIG9mZnNldD0iMC4xNCIgc3RvcC1jb2xvcj0iIzQzZmZmZiIvPjxzdG9wIG9mZnNldD0iMC4xNyIgc3RvcC1jb2xvcj0iIzI1ZmZmZiIvPjxzdG9wIG9mZnNldD0iMC4xOSIgc3RvcC1jb2xvcj0iIzFmZiIvPjxzdG9wIG9mZnNldD0iMC4yMSIgc3RvcC1jb2xvcj0iIzA0ZmZmZiIvPjxzdG9wIG9mZnNldD0iMC4yMyIgc3RvcC1jb2xvcj0iYXF1YSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iYmx1ZSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTE4NS44Myw0Mi42NXYxLjQ5YS41OC41OCwwLDAsMS0uNTguNThoLTcuMDdjMCwuMzcsMCwuNjksMCwxYTU0LjMsNTQuMywwLDAsMS0uMyw2LC41OS41OSwwLDAsMS0uNTguNTNoLTEuNTNhLjU1LjU1LDAsMCwxLS41NC0uNTZ2MGE1MC44Nyw1MC44NywwLDAsMCwuMzEtNS45MWMwLS4zMSwwLS42NCwwLTFoLTdhLjU4LjU4LDAsMCwxLS41OC0uNThWNDIuNjVhLjU3LjU3LDAsMCwxLC41Ny0uNThoNi45YTUxLjYsNTEuNiwwLDAsMC0uOTItNy4xMS40OS40OSwwLDAsMSwuMzgtLjU3aDEuNzZhLjUzLjUzLDAsMCwxLC41Mi40NCw1NSw1NSwwLDAsMSwuOSw3LjI1aDcuMTdBLjU4LjU4LDAsMCwxLDE4NS44Myw0Mi42NVoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik05Mi4xMiwyMy4xMWgwWm0tLjQ3LjA1YTEuNjIsMS42MiwwLDAsMS0uNTMtLjExLDEuMjMsMS4yMywwLDAsMCwuNTUuMTNoLjE0Wm0wLDBhMS42MiwxLjYyLDAsMCwxLS41My0uMTEsMS4yMywxLjIzLDAsMCwwLC41NS4xM2guMTRaIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE3Ni4yMSwzMC44OGE0OS4zNyw0OS4zNywwLDAsMC04Ni43OS04Ljc2LjU4LjU4LDAsMCwwLS4wNy41MS42LjYsMCwwLDAsLjM2LjM3bDEuMjkuNDNhLjcyLjcyLDAsMCwwLC44Mi0uMjgsNDYuNzYsNDYuNzYsMCwwLDEsODEuNzQsOC4wNS42OC42OCwwLDAsMCwuNjIuNDJoMS41M2EuNTQuNTQsMCwwLDAsLjU0LS41NC43MS43MSwwLDAsMCwwLS4yWm0tODUtNy44MWEuMjIuMjIsMCwwLDEtLjExLDBsLjEsMGgwWiIgZmlsbD0idXJsKCNyYWRpYWwtZ3JhZGllbnQpIi8+PHBhdGggZD0iTTEwOC4wOCwzMy4wOHMuMzctLjU1LjY4LTFhMTcuNzEsMTcuNzEsMCwwLDEsMi4zNC0yLjQ4bC41MS0uNDJzLS40MywwLS42Ny4wOWE1LjE2LDUuMTYsMCwwLDAtMS44NiwxYy0uNy42LTEuNDcsMS41OC0xLjEyLDIuNDVsLjEyLjI5Wm0zLjksMS4wNWE3LjU5LDcuNTksMCwwLDAsMy4xMi0uOTNjMS0uNTMsMi4zNS0xLjU3LDIuMi0yLjc4YTEsMSwwLDAsMC0uNjMtLjgzLDEuNDYsMS40NiwwLDAsMC0xLjE4LDAsMy41NSwzLjU1LDAsMCwwLS45NC40LDE0LjI4LDE0LjI4LDAsMCwwLTMuNDcsMy4wNmMtLjE5LjI1LS4zOS41NC0uNTQuNzNzLS4xNy4yMy0uMTYuMjZhNC45LDQuOSwwLDAsMCwxLjYuMDhabS0yLjgyLDIuMDZhNi4zOCw2LjM4LDAsMCwwLS4zNi42MywxLjE0LDEuMTQsMCwwLDEtLjI3LjMxLjU4LjU4LDAsMCwxLS44MiwwLDIsMiwwLDAsMS0uNjMtMS40LDMuNzUsMy43NSwwLDAsMCwwLS42Nyw0LjE4LDQuMTgsMCwwLDAtLjU3LTEsMy44NSwzLjg1LDAsMCwxLS4zOS0xLjQxLDQuNjgsNC42OCwwLDAsMSwxLjQ4LTMuMzgsOS42Myw5LjYzLDAsMCwxLDMuMjgtMi4yNCw2LjQxLDYuNDEsMCwwLDEsNC4yMS0uMzksMy4xMywzLjEzLDAsMCwxLDEuMzEuODksMS4xMiwxLjEyLDAsMCwwLC4xOC4yLDEuMywxLjMsMCwwLDAsLjMzLjA3LDMuMjYsMy4yNiwwLDAsMSwxLjI2LjYsMi40MywyLjQzLDAsMCwxLC44OCwxLjQxLDMuODcsMy44NywwLDAsMS0xLjIxLDMuMjYsMTEuOTIsMTEuOTIsMCwwLDEtNC4zMiwzLDcuMDksNy4wOSwwLDAsMS0yLjc1LjQ5Yy0uMjYsMC0uNTMtLjA5LS43OS0uMTFhNCw0LDAsMCwxLS42Ni0uMTdjLS4wNi0uMDUtLjEzLS4wOS0uMTYtLjA3Wm0xLjUxLDIuNjJhLjY2LjY2LDAsMCwxLC4yLjA2LDEuNzUsMS43NSwwLDAsMSwxLDEuMzhBNDIsNDIsMCwwLDEsMTEyLjQsNDZjMCwuOTEuMDYsMS44LjEsMi43YTEwLjgzLDEwLjgzLDAsMCwxLS4wNywyLjQ5LDEuMTYsMS4xNiwwLDAsMS0uNDcuNzEsMi4yLDIuMiwwLDAsMS0xLjI4LjEyYy0uODctLjE4LTEuMTUtLjc0LTEuMjgtMS42YTQzLjgyLDQzLjgyLDAsMCwxLDAtNy43OEExNy4zNCwxNy4zNCwwLDAsMSwxMTAsMzkuNWMuMS0uMjYuMzEtLjc3LjY5LS42OVpNODMuODYsNDEuODlzLTEuMjguMDktMi4xNy4xOWEyNC4zNiwyNC4zNiwwLDAsMC00LjQ3LjkyYy0uMzYuMTQtMS4xMS40NC0xLjE4LjgyYTEuMzEsMS4zMSwwLDAsMCwuNDUsMWMuMTYuMTksMSwxLDEuMjksMS4yNWEyMi4zNywyMi4zNywwLDAsMCw0LjY5LDIuODVjLjUzLjIyLDEuNDEuNTMsMS40MS41M3MtLjA2LTIuNSwwLTVjMC0xLjMxLDAtMi42LDAtMi42Wm0yMy42MiwxYTExLjIxLDExLjIxLDAsMCwxLS4xMywyLjEyLDkuNDcsOS40NywwLDAsMS0uNCwxLjM4LDE2LDE2LDAsMCwxLS43MSwxLjQ0LDEyLjA1LDEyLjA1LDAsMCwxLTIsMi40OCwxNywxNywwLDAsMS04LjU5LDMuMzcsMjEuODYsMjEuODYsMCwwLDEtNi40MS0uMTlsLTEuODEtLjM4YTcuMTEsNy4xMSwwLDAsMSwwLC43NCwyLjc0LDIuNzQsMCwwLDEtLjE4LjYyLDEsMSwwLDAsMS0uNzcuNTVBMi4zNiwyLjM2LDAsMCwxLDg1LjEsNTVhMS44OSwxLjg5LDAsMCwxLTEtMS42NGMtLjEtLjU4LS4yLTEuNTktLjItMS41OUw4Myw1MS4yOGEyMy45MSwyMy45MSwwLDAsMS0zLjU5LTIuMTljLS42My0uNS0xLjI1LTEtMS44NS0xLjU2YTEwLjI0LDEwLjI0LDAsMCwxLTItMi40NSwyLjM2LDIuMzYsMCwwLDEtLjIyLTIuMmMuNDQtMS4xLDItMS45MywzLjExLTIuNGEyNS42OSwyNS42OSwwLDAsMSw0LjI5LTEuMzFjLjQ4LS4wNywxLjIzLS4yLDEuMjgtLjIzbDAsMHMuMDYtMS4xMywwLTEuNTIuMjktMywuMzktMy41MmE2LjM4LDYuMzgsMCwwLDEsLjUtMS43My40Ni40NiwwLDAsMSwuNjMtLjA1YzEuMTcuNzMsMS41MywzLjI3LDEuNjIsNC41NiwwLC43OC4wOCwyLC4wOCwyczEuMzUsMCwyLjE4LDBhMjEuMjcsMjEuMjcsMCwwLDEsMi41My4yNywxNy43LDE3LjcsMCwwLDEsNC4zNywxLjI1LDQuNDcsNC40NywwLDAsMSwyLjIxLDIuMjMsMi4zLDIuMywwLDAsMS0uMTksMi4xMkEzLDMsMCwwLDEsOTYuMDYsNDZhMy43MywzLjczLDAsMCwxLTEuNjEtLjM3LjI3LjI3LDAsMCwxLDAtLjM5aDBzLjUxLS4yOS43OS0uNDRhMS42NCwxLjY0LDAsMCwwLC4zNy0uMjZjLjI0LS4yMS40NS0uNDQuNDMtLjdzLS40LS41NS0uNzUtLjY5YTI3Ljc0LDI3Ljc0LDAsMCwwLTYuNDktMS4yOWwtMS41LS4wNi4xOSw4LjcyLDEuMy4yM2MuMzIuMDUsMS43Mi4xNywyLjA5LjE4YTE5LjIsMTkuMiwwLDAsMCw4LjU1LTEuNCw4Ljk0LDguOTQsMCwwLDAsMy0yLjEsNi4xLDYuMSwwLDAsMCwxLjQ0LTQuNTIsMTEuNzYsMTEuNzYsMCwwLDAtMi41Mi01LjQxYy0yLjc2LTMuNTUtNy41LTYuNDgtMTEuNjYtOC4xOWEzNy4yMSwzNy4yMSwwLDAsMC0xMy0yLjkyLDIyLDIyLDAsMCwwLTUsLjM3bC0uNTQuMTVhMS40MiwxLjQyLDAsMCwwLS40LjE3bC0uMDYuMDZhLjc0Ljc0LDAsMCwwLC4xNS4wOGMuMTQuMDYuNzEuMDksMSwuMTVhMSwxLDAsMCwxLC42NS4zOC4zOC4zOCwwLDAsMSwwLC40OGMtLjMuMzYtMS4zOC4zLTEuODcuMjJzLTEuMTItLjIzLTEuMjQtLjY3YTIsMiwwLDAsMSwuMzctMS40OCwzLjYxLDMuNjEsMCwwLDEsMi40LTEuNzIsMjQuNjksMjQuNjksMCwwLDEsNS4wNi0uNzlBMjkuNDMsMjkuNDMsMCwwLDEsODcsMjUuMjFhNDYuMjcsNDYuMjcsMCwwLDEsNi4xMSwyLjM4LDQ3LjQxLDQ3LjQxLDAsMCwxLDQuNDYsMi40OWMuMzYuMjMsMi40NiwxLjc3LDIuNzksMi4wNS42OC41NSwxLjU3LDEuMzUsMi4yMSwyYTIxLjE0LDIxLjE0LDAsMCwxLDMuNTUsNC42M2MuMTguMzYuMzIuNzEuNTUsMS4xM2E5LjM0LDkuMzQsMCwwLDEsLjQ4LDEuMjRjLjA2LjI1LjE0LjYxLjE1LjYyYTYuMTQsNi4xNCwwLDAsMSwuMTcsMS4xNVptMTQuNTIuNjMuMTQsMGExMS4xMiwxMS4xMiwwLDAsMSwyLjgyLjY3LDIuOTIsMi45MiwwLDAsMSwxLjUyLDEuNDQsNC4wNyw0LjA3LDAsMCwxLTIsNS43QTcuNjEsNy42MSwwLDAsMSwxMjIsNTJhOS4xNCw5LjE0LDAsMCwxLTQuODMtLjg2LDUuNzIsNS43MiwwLDAsMS0yLjQ1LTIuMDksMiwyLDAsMCwxLC4xLTIuMjJjLjc1LTEsMi4zOC0xLjI3LDMuNi0xLjIzYTE1LjMyLDE1LjMyLDAsMCwxLDMuNS42NCw2LjMyLDYuMzIsMCwwLDEsMS4zMS42MS40Mi40MiwwLDAsMSwuMTQuNDJjLS4yLjYyLTEuNzEuOTUtMi4xNCwxLTEuMTYuMTgtMS43Ny0uMjYtMy4wOS0uNzhhNC4zNSw0LjM1LDAsMCwwLTEuMTEtLjNjLS42LS4wNi0xLjMyLjExLTEuNDQuNzYsMCwuMzQuMzQuNjYuNjQuNzlhNC43NCw0Ljc0LDAsMCwwLDIsLjQyLDEwLjI5LDEwLjI5LDAsMCwwLDYuMDctMS41LjkyLjkyLDAsMCwwLC40Ni0uNzFzMC0uMzYtLjE2LS40aDBzLS4xLS4xMi0uMTYtLjE4YTIuNTgsMi41OCwwLDAsMC0uNzEtLjQsMTcuMTcsMTcuMTcsMCwwLDAtNC4zMS0uOGMtMS4xNC0uMS0yLjkzLS4yNC0zLjM1LS4zMWE0LjkyLDQuOTIsMCwwLDEtMS4zMS0uMzIsMS42MywxLjYzLDAsMCwxLS44OC0xLDMuMTQsMy4xNCwwLDAsMSwuNDktMi4zNWMxLjEzLTEuNjIsMy43Ny0yLjIzLDUuNzQtMi40OHM1LS4yNCw2Ljg3Ljc2Yy4yOS4xNS40NC4zLjM4LjYxYTEuNTMsMS41MywwLDAsMS0xLjA5LDEuMTIsMTIuNDUsMTIuNDUsMCwwLDEtMi4yMS4yNywzNi44NiwzNi44NiwwLDAsMC03LjE1LjY1LDEuNjMsMS42MywwLDAsMC0uNTUuMjNjLS4zNC4zNy42My40Ny44My41MmwuMTQsMCw0Ljc2LjU2Wk0xMjkuMDUsNTJjLS45MS0uMzMtMS4xMi0xLjgtMS4xNi0yLjU1YTIzLjM1LDIzLjM1LDAsMCwxLDEuMzEtOC4wN2MuMjMtLjY1LjU3LTEuNzEsMS4yOS0xLjY1YTEuNjUsMS42NSwwLDAsMSwxLjE0LjgzYy43NywxLjA5LDEuNTMsMi4yLDIuMjgsMy4zMnMxLjM2LDIuMTQsMiwzLjExYTEuMjYsMS4yNiwwLDAsMCwuMjUuMzFjLjEyLjEuMjMuMS4yNywwYTE0LjI4LDE0LjI4LDAsMCwwLDAtMS41MWMtLjA1LS4zOS0uMDctLjctLjEyLTFhMzAuNDMsMzAuNDMsMCwwLDAtLjY3LTMuMjljLS4yOC0xLS42MS0yLjEzLS44NS0zLjE0YTQuMDgsNC4wOCwwLDAsMS0uMTUtMSwuNTEuNTEsMCwwLDEsLjc2LS41M2MuOTMuMzMsMi4xNiwyLjM1LDIuNTIsMywuMTIuMjMuNiwxLjQzLjcyLDEuNzdhMTQuOSwxNC45LDAsMCwxLC43MiwzLjUxLDkuNzYsOS43NiwwLDAsMS0uNSw0LjIsNC41NCw0LjU0LDAsMCwxLS45MSwxLjM0LDIuMSwyLjEsMCwwLDEtMi4yMi40NSwxMS42LDExLjYsMCwwLDEtMi4yMy0zYy0uNzMtMS4yNy0yLTMuNzYtMi4xNy00YS40My40MywwLDAsMC0uMi0uMTVjLS4wNywwLS4xLjEzLS4xMi4yMy0uMTMuNzMtLjIxLDQuMTEtLjIxLDQuMjFhMTYuODksMTYuODksMCwwLDEtLjIyLDIuNjVjLS4xLjQ1LS4yMS44Mi0uNjMsMWExLDEsMCwwLDEtLjg3LS4wNlptMTIuNTgtLjQ0YTQuMTcsNC4xNywwLDAsMS0uMzctLjM2LDYuNjgsNi42OCwwLDAsMS0uNDEtLjY3Yy0uMDYtLjEzLS4xLS4yMi0uMTQtLjMzYTQuMTEsNC4xMSwwLDAsMS0uMTMtMi4zNiwxMS4zLDExLjMsMCwwLDEsLjY5LTEuODcuNDguNDgsMCwwLDAsMC0uMTdjMC0uMTUtLjIyLTEuMTItLjIzLTEuNDQsMC0uNDguMzUtLjgyLDEtLjg4bC4xMywwYy4yNS0uMDYuNDItLjU0LjU1LS45MmwuNDgtMS4zNWMtLjQxLS4xLS44MS0uMjEtMS4yMS0uMzRhMS43NiwxLjc2LDAsMCwxLTEtLjg0Yy0uMjUtLjUxLS4wOC0uNzkuNDUtLjk1LjE5LS4wNywxLjcyLS4zNiwyLjItLjQzbDEuNzUtLjIzYy41LS4wNiwyLjc4LS4zMywzLjUxLS4zMWEyLjg3LDIuODcsMCwwLDEsMi40OCwxLjQzYy4zNS41LjU5LDEuMS4wNiwxLjQyLS44MS40OS0zLjQzLjUzLTMuOTEuNTNIMTQ1LjdsLS41MywxLjc5LDIuOTMsMGEzLjQ5LDMuNDksMCwwLDEsLjY1LjA1Yy41NC4xMi43My41My43NSwxLjEzcy0uMSwxLS42NiwxLjFjLS4yOC4wNS0zLjUxLjA3LTQsLjEybC0uNTYuMDdzLS4yMy42MS0uNDMsMS4yMy0uMzgsMS4yOS0uMzgsMS4yOWguM2EzLjM4LDMuMzgsMCwwLDAsLjYzLS4wN2MxLS4xNywyLjQ1LS4zOSwzLjY1LS41OC42NS0uMSwxLS4xNSwxLjMxLjI4YTEuNzksMS43OSwwLDAsMSwuNDcsMS4xNWMwLC40My0uMzEuNzEtLjcxLDFhMTIsMTIsMCwwLDEtNSwyLjIsMy4zNSwzLjM1LDAsMCwxLTEuNTktLjE3LDMsMywwLDAsMS0uNTctLjI3cy0uMjQtLjE0LS4zMy0uMjFaTTE2Miw0Mi43OWExNy43MiwxNy43MiwwLDAsMC0yLjQxLDIuODVjLS42OSwxLTEuMzMsMi4xLTIsM2ExMC4zNiwxMC4zNiwwLDAsMC0uNTIuOTIsMi4wNywyLjA3LDAsMCwwLC44NCwwLDcuMTksNy4xOSwwLDAsMCwyLjcxLTEuMjYsNS43OCw1Ljc4LDAsMCwwLDItMy4xLDMuMzMsMy4zMywwLDAsMC0uMTktMi4yOC4zMi4zMiwwLDAsMC0uNDQtLjA1Wm0tNi42LDEwcy0uMjYuNzctLjQ1LDEuMzhjLS4zNCwxLTEuMDcsMy44Ni0xLjI1LDQuNzMtLjI1LDEuMy0xLDQuNzEtMSw0Ljc4YS40NS40NSwwLDAsMS0uMi4yMWMtLjMuMTctLjQyLjExLS43OS0uMDhhMy41NSwzLjU1LDAsMCwxLTEuMjQtMWMtLjcxLS45Mi0uNTQtMi42Ni0uNC0zLjY4YTMyLDMyLDAsMCwxLDIuMzQtOC42Ny4xNS4xNSwwLDAsMCwwLS4xMyw2LjkxLDYuOTEsMCwwLDEtLjY1LTIuODZjMC0yLjc4LDEuNi01LjUyLDMuMzktNy43My4xMy0uMTcsMS0xLjIyLDEuNDEtMS4ycy40Ny40OS40MS44OGExMS44OCwxMS44OCwwLDAsMS0xLjczLDMuNjcsMTEsMTEsMCwwLDAtMS4xOCwyLjgyLDcuODcsNy44NywwLDAsMC0uMTksMS4wOGMwLC4zLjA4LjY4LjA4LjY4czEuMTMtMS41OSwxLjg4LTIuNTZjLjQtLjUzLjctLjg5LDEtMS4yNy42Ni0uNzMsMS4zNS0xLjQ0LDItMi4xM2E3LjU5LDcuNTksMCwwLDEsMi0xLjUzLDEuNzcsMS43NywwLDAsMSwyLDAsNC41OCw0LjU4LDAsMCwxLDEuNjQsMy4zNyw4LjE1LDguMTUsMCwwLDEtLjc4LDQuMjYsOC44LDguOCwwLDAsMS0zLjE2LDMuNDIsOC41Miw4LjUyLDAsMCwxLTQuNzIsMS41NWwtLjQ4LDBaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTI0Nyw0Mi4zM3MtLjA2LjU0LS4xNSwxLjE0YTIuNDIsMi40MiwwLDAsMS0yLjcyLDIuMDVoLTUuODVsLS42Niw1LjIzaC00LjY2TDIzNCw0Mi4zM1ptLTI3LjQ5LDBoMTAuMjRjMS40NiwwLDMuMzIuNjMsMi45NSwzLjI3YTIwLjU4LDIwLjU4LDAsMCwxLS41NSwzLjIxYy0uNzgsMS44Ni0zLjEsMS45Mi0zLjQzLDEuOTRIMjE4LjQxbC40Ni0zLjY1aDkuMDdsLjItMS41OGgtNi4zMUMyMjAuMjUsNDUuNTIsMjE5LjEzLDQ0LjUzLDIxOS40Nyw0Mi4zM1ptLS45NCwwLS40LDMuMTloLTcuODFsLS4yLDEuNThoNy44MWwtLjQ3LDMuNjVIMjA1bDEuMDctOC40MlptMjkuMzgsMGg0LjY2bC0xLjA2LDguNDJoLTQuNjdsMS4wNy04LjQyWm04Ljg1LDBoNC42NmwtMS4wNiw4LjQySDI1NS43bDEuMDYtOC40MlptLTUwLTUuMzNoMTIuNDdsLS40OSwzLjg2SDIwNi4yNWwuNDktMy44NlptMzcuNCwwYzIuNiwwLDMuMywxLjQ5LDMuMDksMy4xNCwwLC4yOS0uMDguNjMtLjA5LjcxSDIxOS42NnMuMDctLjUzLjE0LTEuMTNjLjE5LTEuNTgsMS41LTIuNjUsMy40OS0yLjcyaDIwLjg1Wm0xNC42LDBjMS42MSwwLDMuMjguNzQsMi45NSwzLjI3LS4wNi40NS0uMDcuNTktLjA3LjU5SDI0OC4wOWwuNDktMy44NloiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0yNzIuMiw0Mi4xNGwuNDQtMy40M2gtMy43MWwtLjQzLDMuNDNIMjY1bC0uNDIsMy40MWgzLjQ4TDI2Ny42NCw0OWgzLjdsLjQ1LTMuNDloMy40OWwuNDMtMy40MVoiIGZpbGw9IiNmOWIzMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0wLDM0SDQ5LjE5VjUxLjIySDBaIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMwLjE1LDUxLjIyaDMuOTFWMzRIMzAuMTRWNTEuMjJabS02Ljg5LTQuOTFhMS4wOCwxLjA4LDAsMCwxLTEsMS4xMUgxOS45NGExLjA5LDEuMDksMCwwLDEtMS4wNS0xLjExVjM5LjM3SDE1djcuMjhjMCwzLDEuOCw0LjU1LDQuNDQsNC41NWgzLjgzYzIuNDQsMCwzLjkyLTEuODcsMy45Mi00LjU1VjM5LjM3SDIzLjI0UzIzLjI2LDQ2LjA5LDIzLjI2LDQ2LjMxWm0yMi02Ljk0djYuOTRhMS4wOSwxLjA5LDAsMCwxLTEsMS4xMUg0MmExLjA5LDEuMDksMCwwLDEtMS0xLjExVjM5LjM3SDM3djcuMjhjMCwzLDEuOCw0LjU1LDQuNDUsNC41NWgzLjgyYzIuNDQsMCwzLjkyLTEuODcsMy45Mi00LjU1VjM5LjM3Wm0tMzcuNTUsMEg1LjI0YTIuOTEsMi45MSwwLDAsMC0xLjMyLjI0VjM0SDBWNTEuMkgzLjlWNDQuMjhhMS4wOSwxLjA5LDAsMCwxLDEtMS4xMUg3LjIyYTEuMDksMS4wOSwwLDAsMSwxLDEuMTF2Ni45NGgzLjkydi03LjVjMC0zLjE0LTItNC4zNS00LjQ0LTQuMzVaIiBmaWxsPSIjMWNlNzgzIi8+PC9zdmc+"
            alt="Call to Action Logo"
          />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo
            src="/src/assets/images/cta-logo-two.png"
            alt="Brands Logo"
          />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/src/assets/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-widht: 600px;
  min-height: 1px;
  display: block;
  width: 100%;

  pointer-events: none;
  user-select: none;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  transition-timing-function: ease-out;
  transition: 0.7s;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-widht: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
