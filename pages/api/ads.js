export default (req, res) => {
    const ads = [
        { size: 120, title: "My Templates" },
        { size: 120, title: "Recently Purchased" },
        { size: 120, title: "Order History" },
        { size: 120, title: "3D Plus" },
        { size: 120, title: "Promotion Tracker" },
        { size: 120, title: "Proposal Writer" }
      ]
    res.statusCode = 200
    res.json(ads)
  }
  