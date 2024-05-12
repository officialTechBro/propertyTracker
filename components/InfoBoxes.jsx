import InfoBox from "./InfoBox"

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoBox 
                heading='For Renters'
                backgroundColor= "bg-blue-100"
                buttonInfo={{
                    text: 'Browse Poperties',
                    link: '/properties',
                    backgroundColor: 'bg-blue-900'
                }}
            >
                Find your dream rental property. Bookmark properties and contact owners
            </InfoBox>
            <InfoBox 
                heading='For Property Owner'
                backgroundColor= "bg-rose-100"
                buttonInfo={{
                    text: 'Add Poperties',
                    link: '/properties/add',
                    backgroundColor: 'bg-rose-900'
                }}
            >
                List your properties and reach potential tenant. Rent as am Airnb or long term
            </InfoBox>
        </div>
      </div>
    </section>
  )
}
export default InfoBoxes