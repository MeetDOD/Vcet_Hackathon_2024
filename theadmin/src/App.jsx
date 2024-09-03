import DataCard from "./components/dashComp/DataCard"
import TableComp from "./components/dashComp/Table"
import SiteHeader from "./components/navbar/siteHeader"

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex flex-1 flex-col sm:flex-row items-center justify-center gap-10 p-4"> {/* Responsive layout and padding */}
          <DataCard title={"Total Teams"} description={"80+"} footer={"Teams Registered"} />
          <DataCard title={"Total Participants"} description={"320+"} footer={"Users Registered"} />
        </div>
        <div className="flex  flex-1 flex-col sm:flex-row items-center justify-center gap-10 p-4"> {/* Responsive layout and padding */}
          <TableComp />
        </div>

      </div>
    </>
  )
}

export default App
