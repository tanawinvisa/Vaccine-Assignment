import HospitalCard from "@/components/HospitalCard";
import HospitalCatalog from "@/components/HospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockResult = {
    
        "success": true,
        "count": 4,
        "data": [
          {
            "_id": "65313fbd43a28e8ed6fee817",
            "name": "Chulalongkorn Hospital",
            "address": "1873 Rama IV Rd",
            "district": "Pathum Wan",
            "province": "Bangkok",
            "postalcode": "10330",
            "tel": "026494000",
            "picture": "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
            "__v": 0,
            "id": "65313fbd43a28e8ed6fee817"
          },
          {
            "_id": "6531405343a28e8ed6fee81a",
            "name": "Rajavithi Hospital",
            "address": "2 Phaya Thai Rd, Thung Phaya Thai",
            "district": "Ratchathewi",
            "province": "Bangkok",
            "postalcode": "10400",
            "tel": "022062900",
            "picture": "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
            "__v": 0,
            "id": "6531405343a28e8ed6fee81a"
          },
          {
            "_id": "653140c143a28e8ed6fee81d",
            "name": "Thammasat University Hospital",
            "address": "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
            "district": "Khlong Luang",
            "province": "Pathum Thani",
            "postalcode": "12120",
            "tel": "029269999",
            "picture": "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
            "__v": 0,
            "id": "653140c143a28e8ed6fee81d"
          },
          {
            "_id": "6543d072101a18f430fee003",
            "name": "Vajira Hospital",
            "address": "681 Samsen Road",
            "district": "Dusit",
            "province": "Bangkok",
            "postalcode": "10300",
            "tel": "02-244-3000",
            "picture": "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
            "__v": 0,
            "id": "6543d072101a18f430fee003"
          }
        ]
}

describe('HospitalCatalog', ()=>{
    it('should have correct number of car imaged', async()=>{
        const hospitalCatalog = await HospitalCatalog({hospitalJson: mockResult})
        render(hospitalCatalog)

        await waitFor(
            ()=>{
                const hospitalImages = screen.queryAllByRole('img')
                expect(hospitalImages.length).toBe(4)
            }
        )
    })
})
