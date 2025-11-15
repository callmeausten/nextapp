import ExploreBtn from "@/components/ExploreBtn"
import EventCard from "@/components/EventCard"

const events = [
  {
    title: "React Sumit US 2025",
    image: "/images/event1.png",
    slug: 'react-summit-us-2025',
    location: 'San Francisco, CA, USA',
    date: '2025-11-07',
    time: '09:00 AM'
  },
  {
    title: "KubeCon + CloudNativeCon Europe 2026",
    image: "/images/event2.png",
    slug: 'kubecon-cloudnativecon-eu-2026',
    location: 'Vienna, Austria',
    date: '2026-03-18',
    time: '10:00 AM'
  },
  {
    title: "Conference Amazon 2026",
    image: "/images/event3.png",
    slug: 'conference-amazon-2026',
    location: 'Paris, France',
    date: '2026-07-10',
    time: '10:00 AM'
  },
  {
    title: "Disscussion Hackaton 2026",
    image: "/images/event4.png",
    slug: 'disscussion-hackaton-2026',
    location: 'Vancouver, Canada',
    date: '2016-06-22',
    time: '10:00 AM'
  },
  {
    title: "Google Cloud Next 2026",
    image: "/images/event5.png",
    slug: 'google-cloud-next-2026',
    location: 'Paris, France',
    date: '2026-07-10',
    time: '10:00 AM'
  },
  {
    title: "ETHGlobal Hackaton: Paris 2025",
    image: "/images/event6.png",
    slug: 'ethglobal-paris-2026',
    location: 'San Jose, CA, USA',
    date: '1016-07-10',
    time: '10:00 AM'
  },
  {
    title: "Open Source Summit North America 2026",
    image: "/images/event-full.png",
    slug: 'oss-na-2026',
    location: 'Vancouver, Canada',
    date: '2016-06-22',
    time: '10:00 AM'
  },
]

export default function Home() {
  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev <br/> Event You Can't Miss</h1>
      <p className="text-center mt-5">Hackatons, Meetups, and Conference, All in One Place</p>
      
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event, i) =>(
            <li key={event.title}>
              <EventCard {...event}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
