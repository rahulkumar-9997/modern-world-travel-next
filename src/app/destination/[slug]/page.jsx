import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import { Heading } from '@/components/Heading/Heading';
export default function DestinationDetailsPage() {
    return (
        <>
            <BreadcrumbHeader
                desktopImage="/assets/img/hero/1.png"
                mobileImage="/assets/img/hero/1.png"
                shapeImage="/assets/img/hero/1/shape.svg"
                title="Destination Details"
                subtitle=""
            />
            <div className="single-tour-section city_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sub-heading text-center">
                                <Heading
                                    level={3}
                                    text="A serene symbol of Tibetan culture and Mahayana Buddhism in the land of Buddha"
                                    className="text-26 text-white fw-500 mb-10"
                                />  
                            </div>
                            <div className="single-tour-inner blog-section">
                                <p>
                                    Nestled in the sacred town of Bodhgaya, the Tibetan Monastery is a
                                    spiritual haven for those seeking calmness, compassion, and a closer
                                    understanding of Tibetan Buddhist culture. Built and maintained by
                                    the Tibetan community, this monastery is an important center for
                                    Mahayana Buddhism and draws monks, pilgrims, and tourists alike. The
                                    structure features traditional Tibetan architecture with vibrant
                                    colors, intricately painted walls, prayer wheels, and a majestic
                                    statue of Lord Buddha in the main shrine. Chanting of Buddhist
                                    mantras, fluttering prayer flags, and the scent of incense create a
                                    peaceful and meditative environment. The monastery also hosts prayer
                                    sessions and occasional teachings by Tibetan lamas. Whether you are
                                    a follower of Buddhism or a curious traveler, the Tibetan Monastery
                                    offers a peaceful pause in the spiritual energy of Bodhgaya.
                                </p>
                                <div className="destination-table">
                                    <div className="destination-time-title">
                                        <Heading
                                            level={4}
                                            text="Important Timings"
                                            className="text-20 text-white fw-500 table-title"
                                        />
                                    </div>
                                    <div className="table-format">
                                        <table border={0} cellPadding={0} cellSpacing={3}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>Visiting Hours</p>
                                                    </td>
                                                    <td>
                                                        <p>7:00 AM – 12:00 PM, 2–6 PM</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Prayer Sessions</p>
                                                    </td>
                                                    <td>
                                                        <p>Morning and Evening</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Meditation Access</p>
                                                    </td>
                                                    <td>
                                                        <p>Available with prior request</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="destination-table">
                                    <div className="destination-time-title">
                                        <Heading
                                            level={4}
                                            text="Booking and Entry Fees"
                                            className="text-20 text-white fw-500 table-title"
                                        />
                                    </div>
                                    <div className="table-formatulli">
                                        <table border={0} cellPadding={0} cellSpacing={3}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>Entry Fee</p>
                                                    </td>
                                                    <td>
                                                        <p>Free</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Group Meditation</p>
                                                    </td>
                                                    <td>
                                                        <p>Free (upon permission)</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Photography</p>
                                                    </td>
                                                    <td>
                                                        <p>Allowed (no flash)</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="destination-table">
                                    <div className="destination-time-title">
                                        <Heading
                                            level={4}
                                            text="History and Legacy"
                                            className="text-20 text-white fw-500 table-title"
                                        />
                                    </div>
                                    <div className="history_legacy">
                                        <p>
                                            The Tibetan Monastery in Bodhgaya was established in the 20th
                                            century to serve as a spiritual center for Tibetan refugees and
                                            Buddhist practitioners. It is one of several international
                                            monasteries built near the Mahabodhi Temple to represent global
                                            Buddhist traditions. Supported by the Tibetan community and
                                            religious bodies, this monastery reflects the essence of
                                            Mahayana Buddhism and the teachings of the Dalai Lama.
                                        </p>
                                        <p>
                                            Its design features a blend of artistic vibrance and spiritual
                                            symbolism. Inside, a large statue of Shakyamuni Buddha presides
                                            over the prayer hall, surrounded by thangkas (Tibetan
                                            paintings), butter lamps, and rows of prayer wheels outside.
                                            Visitors are welcome to spin these wheels while chanting “Om
                                            Mani Padme Hum,” a mantra of compassion. The monastery also
                                            functions as a center for teachings on Buddhist philosophy,
                                            meditation, and cultural exchange. It plays a vital role in
                                            preserving Tibetan identity and promoting peace and mindfulness
                                            through the Buddhist path.
                                        </p>
                                    </div>
                                </div>
                                <div className="destination-table">
                                    <div className="destination-time-title">
                                        <Heading
                                            level={4}
                                            text="Nearby Destinations"
                                            className="text-20 text-white fw-500 table-title"
                                        />
                                    </div>
                                    <div className="table-formatulli">
                                        <table border={0} cellPadding={0} cellSpacing={3}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>Mahabodhi Temple</p>
                                                    </td>
                                                    <td>
                                                        <p>850 m</p>
                                                    </td>
                                                    <td>
                                                        <p>4–5 mins</p>
                                                    </td>
                                                    <td>
                                                        <p>Walk / Auto</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Great Buddha Statue</p>
                                                    </td>
                                                    <td>
                                                        <p>1.5 km</p>
                                                    </td>
                                                    <td>
                                                        <p>7 mins</p>
                                                    </td>
                                                    <td>
                                                        <p>Auto / Rickshaw</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Japanese Temple</p>
                                                    </td>
                                                    <td>
                                                        <p>1.1 km</p>
                                                    </td>
                                                    <td>
                                                        <p>6 mins</p>
                                                    </td>
                                                    <td>
                                                        <p>Auto / Walk</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Thai Monastery</p>
                                                    </td>
                                                    <td>
                                                        <p>650 m</p>
                                                    </td>
                                                    <td>
                                                        <p>3 mins</p>
                                                    </td>
                                                    <td>
                                                        <p>Walk</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Royal Bhutan Monastery</p>
                                                    </td>
                                                    <td>
                                                        <p>1.3 km</p>
                                                    </td>
                                                    <td>
                                                        <p>6 mins</p>
                                                    </td>
                                                    <td>
                                                        <p>Auto / Rickshaw</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="destination-table">
                                    <div className="destination-time-title">
                                        <Heading
                                            level={4}
                                            text="Tourist Guidelines & Tips"
                                            className="text-20 text-white fw-500 table-title"
                                        />                                        
                                    </div>
                                    <div className="table-formatulli">
                                        <ul>
                                            <li>
                                                Maintain silence inside the monastery and respect prayer
                                                sessions
                                            </li>
                                            <li>Dress modestly (avoid sleeveless or short clothing)</li>
                                            <li>Do not touch religious objects unless permitted</li>
                                            <li>Spinning prayer wheels is allowed; move clockwise</li>
                                            <li>No littering; use dustbins provided</li>
                                            <li>Avoid loud conversation or phone usage</li>
                                            <li>
                                                Meditation allowed only with permission from monastery staff
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="destination-table">
                                    <div className="destination-time-title">
                                        <Heading
                                            level={4}
                                            text="Top Things to Buy Near Gaya / Bodhgaya"
                                            className="text-20 text-white fw-500 table-title"
                                        /> 
                                    </div>
                                    <div className="table-formatulli">
                                        <ul>
                                            <li>Tibetan prayer flags</li>
                                            <li>Incense sticks and burners</li>
                                            <li>Miniature prayer wheels</li>
                                            <li>Handcrafted Buddha statues</li>
                                            <li>Tibetan jewelry and singing bowls</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="destination-table">
                                    <div className="destination-time-title">
                                        <Heading
                                            level={4}
                                            text="Top Things and Places to Eat Nearby"
                                            className="text-20 text-white fw-500 table-title"
                                        /> 
                                    </div>
                                    <div className="table-formatulli">
                                        <ul>
                                            <li>
                                                <strong>Tibetan Om Café</strong> – Authentic Tibetan thukpa,
                                                momos, and herbal teas
                                            </li>
                                            <li>
                                                <strong>Be Happy Café</strong> – Great for pizza, coffee, and
                                                continental dishes
                                            </li>
                                            <li>
                                                <strong>Nirvana Café</strong> – Offers healthy meals and
                                                refreshing drinks
                                            </li>
                                            <li>
                                                <strong>Maya Heritage Restaurant</strong> – Indian, Chinese,
                                                and local specialties
                                            </li>
                                            <li>
                                                <strong>Street Food Stalls</strong> – Samosas, jalebis,
                                                litti-chokha, and chai
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
