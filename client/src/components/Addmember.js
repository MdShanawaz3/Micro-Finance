import {
    CForm,
    CFormInput,
    CFormSelect,
    CImage,
    CInputGroup,
    CInputGroupText,
  } from "@coreui/react";
  import React from "react";
  import Main from "./Main";
  
  
  function Addmember() {
    return (
      <>
        <Main />
        <CForm className="add-card ">
          <p style={{ textAlign: 'center', padding: '8px 0px 1px 0px', fontSize: '30px', fontWeight: 'bolder', background: '#2364aa', color: 'white' }}>Add Member Form</p>
          <div className="form-container" style={{ display: "flex" }}>
            <div className="form-1" style={{ marginRight: "0px" }}>
              <p>User Details </p>
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1" >    me<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  placeholder="Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1"> Father Name<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  placeholder="Father/Husband name"
                  aria-label="Father name"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3" >
                <CInputGroupText id="basic-addon1" required>Gender<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormSelect size="sm">
                  <option disabled>select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
  
                  <option value="Other">Other</option>
                </CFormSelect>
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Date of Birth<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  placeholder="xx/xx/xxxx"
                  type="date"
                  aria-label="Number"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1" required>Religion<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormSelect size="sm">
                  <option disabled>Select</option>
                  <option value="Hinduism">Hinduism</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Christanity">Christanity</option>
                  <option value="Shikhism">Shikhism</option>
                  <option value="Jainism">Jainism</option>
                  <option value="Buddhisum">Buddhisum</option>
                  <option value="Others">Others</option>
                </CFormSelect>
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Email<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  type="email"
                  placeholder="example@email.com"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
              <hr />
  
              <p className="mb-2">Address *</p>
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">House no<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="House no"
                  aria-label="house"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">City<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="City"
                  aria-label="City"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Country<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Country"
                  aria-label="Country"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <hr />
  
              <p className="mb-2">Permanent Address *</p>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">House no<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="House no"
                  aria-label="house"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">City<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="City"
                  aria-label="City"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Country<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Country"
                  aria-label="Country"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <hr />
  
              <p className="mb-2">Business *</p>
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">
                  Creadit Limit<span style={{color:'red',fontWeight:'lighter'}}>*</span>
                </CInputGroupText>
                <CFormInput
                  type="number"
                  placeholder="Creadit"
                  aria-label="Creadit"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Occupation<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormSelect required size="sm">
                  <option disabled>Select</option>
                  <option value="Business">Business</option>
                  <option value="Trust">Trust</option>
                  <option value="NGO">NGO</option>
                  <option value="Society">Society</option>
                  <option value="Selfhelp Group">Selfhelp Group</option>
                  <option value="Homemaker">Homemaker</option>
                  <option value="Govt. Service">Govt. Service</option>
                  <option value="Pvt. Service">Pvt. Service</option>
                  <option value="Professional">Professional</option>
                  <option value="Student">Student</option>
                  <option value="Retired">Retired</option>
                </CFormSelect>
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Location Type<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormSelect size="sm" required>
                  <option disabled>Select Type</option>
                  <option value="1">Fixed</option>
                  <option value="2">Moving</option>
                </CFormSelect>
              </CInputGroup>
  
              <hr />
              <p className="mb-2">Nominee *</p>
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Name<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">
                  Date of Birth<span style={{color:'red',fontWeight:'lighter'}}>*</span>
                </CInputGroupText>
                <CFormInput
                  type="date"
                  placeholder="xx/xx/xxxx"
                  aria-label="DOB"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <p className="mb-2">Nominee Address *</p>
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">House no<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="House no"
                  aria-label="house"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">City<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="City"
                  aria-label="City"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Country<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Country"
                  aria-label="Country"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
              <hr />
              <p className="mb-2">Introducer</p>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Member Id</CInputGroupText>
                <CFormInput
                  type="number"
                  placeholder="xxxxx"
                  aria-label="DOB"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Phone No </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="xxxxxxxxx"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
              <hr />
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">
                  Share purchased
                </CInputGroupText>
                <CFormInput
                  type="date"
                  placeholder="Date."
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
              <hr />
              <p className="mb-2">Images</p>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Member Image </CInputGroupText>
                <CFormInput type="file" />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">
                  Establishment: 1
                </CInputGroupText>
                <CFormInput type="file" />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">
                  Establishment: 3
                </CInputGroupText>
                <CFormInput type="file" />
              </CInputGroup>
  
  
              <CFormInput type="submit" style={{ display: 'inline', width: '30%', background: "green", color: 'white', fontWeight: 'bolder' }} />
  
              <CFormInput type="button" value="Cancel" style={{ display: 'inline', width: '30%', background: "red", color: 'white', fontWeight: 'bolder' }} />
  
            </div>
  
            {/* -------------------Right div------------------------------------------------------------------------------ */}
            <div className="form-2">
              <p><span style={{color:'red',fontWeight:'lighter'}}>*</span>Fields are mandatory</p>
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1" required>Member Type <span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormSelect size="sm">
                  <option disabled>Member Type</option>
                  <option value="1">Primary</option>
                  <option value="2">Assosiate Organization</option>
                  <option value="3">Assosiate Individual</option>
                  <option value="3">Nominal</option>
                </CFormSelect>
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Adhaar Number<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  placeholder="xxxxxxxxxxxx"
                  type="number"
                  aria-label="Adhaar Number"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Age<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  placeholder="xx"
                  type="number"
                  aria-label="Number"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1" required>Caste<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormSelect size="sm">
                  <option disabled>Select</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="OBC">OBC</option>
                  <option value="SBC">SBC</option>
                  <option value="Other">Other</option>
                </CFormSelect>
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Annual Income<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  placeholder="xx"
                  type="number"
                  aria-label="Number"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">Phone No.<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  placeholder="xx"
                  type="number"
                  aria-label="Number"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
              <hr />
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1" style={{ marginTop: "33px" }}>
                  Street<span style={{color:'red',fontWeight:'lighter'}}>*</span>
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Street"
                  aria-label="house"
                  aria-describedby="basic-addon1"
                  style={{ marginTop: "33px" }}
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">State<span style={{color:'red',fontWeight:'lighter'}}>*</span> </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="State"
                  aria-label="State"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3" style={{ marginTop: "119px" }}>
                <CInputGroupText id="basic-addon1">Street <span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Street"
                  aria-label="house"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">State<span style={{color:'red',fontWeight:'lighter'}}>*</span> </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="State"
                  aria-label="State"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3" style={{ marginTop: "119px" }}>
                <CInputGroupText id="basic-addon1" required>Good Services<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormSelect size="sm">
                  <option disabled>Select</option>
                  <option value="1">Goods</option>
  
                  <option value="3">Service</option>
                </CFormSelect>
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1" required>Business Type<span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormSelect size="sm">
                  <option value="">--Select--</option>
                  <option value="Acid Business">Acid Business</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Air Conditioner and Fridge Repair">Air Conditioner and Fridge Repair</option>
                  <option value="Artificial Jewellery">Artificial Jewellery</option>
                  <option value="Attar Shop">Attar Shop</option>
                  <option value="Auto Consultancy">Auto Consultancy</option>
                  <option value="Auto Electrician">Auto Electrician</option>
                  <option value="Auto Mobile Spare Parts">Auto Mobile Spare Parts</option>
                  <option value="Automobile Mechanic">Automobile Mechanic</option>
                  <option value="Automobile Washing Centre">Automobile Washing Centre</option>
                  <option value="Baby Store">Baby Store</option>
                  <option value="Bags Business">Bags Business</option>
                  <option value="Bakery &amp; Sweets">Bakery &amp; Sweets</option>
                  <option value="Band set &amp; Musical Instruments">Band set &amp; Musical Instruments</option>
                  <option value="Bangle Store">Bangle Store</option>
                  <option value="Battery Shop">Battery Shop</option>
                  <option value="Bearing Works">Bearing Works</option>
                  <option value="Beauty parlour">Beauty parlour</option>
                  <option value="Bedding &amp; Mattresses">Bedding &amp; Mattresses</option>
                  <option value="Beedi Works">Beedi Works</option>
                  <option value="Building Contractor">Building Contractor</option>
                  <option value="Building Material Store">Building Material Store</option>
                  <option value="Cable Network Operator">Cable Network Operator</option>
                  <option value="Caps">Caps</option>
                  <option value="Car Decorator">Car Decorator</option>
                  <option value="Carpenter">Carpenter</option>
                  <option value="Catering">Catering</option>
                  <option value="Cattle business">Cattle business</option>
                  <option value="Cattle Food">Cattle Food</option>
                  <option value="CCTV Works">CCTV Works</option>
                  <option value="Cell phone Repairing &amp; Sales">Cell phone Repairing &amp; Sales</option>
                  <option value="Cement Rings Manufacturing">Cement Rings Manufacturing</option>
                  <option value="Centring Material">Centring Material</option>
                  <option value="Centring Material Or steel Or wood">Centring Material Or steel Or wood</option>
                  <option value="Chair Repair Works">Chair Repair Works</option>
                  <option value="Charcoal Business">Charcoal Business</option>
                  <option value="Chicken Centre or Mutton">Chicken Centre or Mutton</option>
                  <option value="Chicken, Mutton &amp; Fish Centre">Chicken, Mutton &amp; Fish Centre</option>
                  <option value="Coconut Business">Coconut Business</option>
                  <option value="Computer Sales &amp; Service">Computer Sales &amp; Service</option>
                  <option value="Confectionary Shop">Confectionary Shop</option>
                  <option value="Cool Drink and Juice Shop">Cool Drink and Juice Shop</option>
                  <option value="Cotton Dealer">Cotton Dealer</option>
                  <option value="Crane Works">Crane Works</option>
                  <option value="Crockery Shop">Crockery Shop</option>
                  <option value="Cycle Mechanic">Cycle Mechanic</option>
                  <option value="Cycle Store">Cycle Store</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Dental Clinic">Dental Clinic</option>
                  <option value="Denting Works">Denting Works</option>
                  <option value="Dry Cleaning">Dry Cleaning</option>
                  <option value="DTP Xerox Internet Cafe">DTP Xerox Internet Cafe</option>
                  <option value="Earth Movers Business">Earth Movers Business</option>
                  <option value="Eggs Business">Eggs Business</option>
                  <option value="Electrical  Shop">Electrical  Shop</option>
                  <option value="Electrical Works">Electrical Works</option>
                  <option value="Electronics &amp; Electricals Servicing">Electronics &amp; Electricals Servicing</option>
                  <option value="Electronics &amp; Home Appliances Shop">Electronics &amp; Home Appliances Shop</option>
                  <option value="Fish Business">Fish Business</option>
                  <option value="Florist">Florist</option>
                  <option value="Flour Mill or Wet Grinder">Flour Mill or Wet Grinder</option>
                  <option value="Foot Wear">Foot Wear</option>
                  <option value="Fruits and Vegetables Business">Fruits and Vegetables Business</option>
                  <option value="Function Hall">Function Hall</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Garments">Garments</option>
                  <option value="Gas Stove Business">Gas Stove Business</option>
                  <option value="General and Fancy Store">General and Fancy Store</option>
                  <option value="General Engineering Works">General Engineering Works</option>
                  <option value="Gifts and Article Shops">Gifts and Article Shops</option>
                  <option value="Glass and Aluminium">Glass and Aluminium</option>
                  <option value="Glass and Aluminium Dealer">Glass and Aluminium Dealer</option>
                  <option value="Gold Smith and Silver Makers">Gold Smith and Silver Makers</option>
                  <option value="Gunny Bags Business">Gunny Bags Business</option>
                  <option value="Gym">Gym</option>
                  <option value="Hair cutting Saloon">Hair cutting Saloon</option>
                  <option value="Handicraft">Handicraft</option>
                  <option value="Hard Ware Shop">Hard Ware Shop</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Ice Cream">Ice Cream</option>
                  <option value="Ice Factory">Ice Factory</option>
                  <option value="Interior Designing">Interior Designing</option>
                  <option value="Jewellery">Jewellery</option>
                  <option value="Key Repair Works">Key Repair Works</option>
                  <option value="Kirana">Kirana</option>
                  <option value="Kirana Store">Kirana Store</option>
                  <option value="Ladies Emporium">Ladies Emporium</option>
                  <option value="Leather Works">Leather Works</option>
                  <option value="Lighting and Decoration">Lighting and Decoration</option>
                  <option value="Lodge">Lodge</option>
                  <option value="Matrimony">Matrimony</option>
                  <option value="Medical Lab">Medical Lab</option>
                  <option value="Medical Shop">Medical Shop</option>
                  <option value="Mineral Water">Mineral Water</option>
                  <option value="Mineral Water Plant">Mineral Water Plant</option>
                  <option value="Motor Rewinding and Repair">Motor Rewinding and Repair</option>
                  <option value="Nursery">Nursery</option>
                  <option value="Oil Mill">Oil Mill</option>
                  <option value="Optical Shop">Optical Shop</option>
                  <option value="Others">Others</option>
                  <option value="Pan Shop">Pan Shop</option>
                  <option value="Parking Stand">Parking Stand</option>
                  <option value="Pesticides &amp; Fertilizers Shop">Pesticides &amp; Fertilizers Shop</option>
                  <option value="Photo Studio or Videography">Photo Studio or Videography</option>
                  <option value="Physiotherapy Centre">Physiotherapy Centre</option>
                  <option value="Pickles">Pickles</option>
                  <option value="Plastic items">Plastic items</option>
                  <option value="Plumbing Works">Plumbing Works</option>
                  <option value="POP (Interior Designing Works)">POP (Interior Designing Works)</option>
                  <option value="Popcorn">Popcorn</option>
                  <option value="Printers">Printers</option>
                  <option value="Radium &amp; Stickers">Radium &amp; Stickers</option>
                  <option value="Rexine Works">Rexine Works</option>
                  <option value="Rice Business">Rice Business</option>
                  <option value="Rice Trader">Rice Trader</option>
                  <option value="Rubber Stamp Works">Rubber Stamp Works</option>
                  <option value="Sanitary Marts">Sanitary Marts</option>
                  <option value="Saree Business">Saree Business</option>
                  <option value="Saw Mill">Saw Mill</option>
                  <option value="School/College">School/College</option>
                  <option value="Scrap">Scrap</option>
                  <option value="Spices">Spices</option>
                  <option value="Spray Painting and Tinkering Shop">Spray Painting and Tinkering Shop</option>
                  <option value="Stamp Paper Vendor">Stamp Paper Vendor</option>
                  <option value="Stationary">Stationary</option>
                  <option value="Stationery">Stationery</option>
                  <option value="Tailoring and Embroidery">Tailoring and Embroidery</option>
                  <option value="Taxi Car or Cabs">Taxi Car or Cabs</option>
                  <option value="Tent House">Tent House</option>
                  <option value="Tiffin and Tea Stall">Tiffin and Tea Stall</option>
                  <option value="Timber Depot">Timber Depot</option>
                  <option value="Tours &amp; Travels">Tours &amp; Travels</option>
                  <option value="Transport">Transport</option>
                  <option value="Tyre Repair or Changing or Air Compressor">Tyre Repair or Changing or Air Compressor</option>
                  <option value="Watch Sales &amp; Service">Watch Sales &amp; Service</option>
                  <option value="Welding Shop">Welding Shop</option>
                </CFormSelect>
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">
                  Business Description<span style={{color:'red',fontWeight:'lighter'}}>*</span>
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Optional..."
                  aria-label="Description"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3" style={{ marginTop: "65px" }}>
                <CInputGroupText id="basic-addon1">Relationship<span style={{color:'red',fontWeight:'lighter'}}>*</span> </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Relation name"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1" style={{ marginTop: "89px" }}>
                  Street<span style={{color:'red',fontWeight:'lighter'}}>*</span>
                </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Street"
                  aria-label="house"
                  aria-describedby="basic-addon1"
                  style={{ marginTop: "89px" }}
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">State <span style={{color:'red',fontWeight:'lighter'}}>*</span></CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="State"
                  aria-label="State"
                  aria-describedby="basic-addon1"
                  required
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3" style={{ marginTop: "119px" }}>
                <CInputGroupText id="basic-addon1">Name </CInputGroupText>
                <CFormInput
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
  
              <CInputGroup className="mb-3" style={{ marginTop: "190px" }}>
                <CInputGroupText id="basic-addon1">Sign Image</CInputGroupText>
                <CFormInput type="file" />
              </CInputGroup>
  
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">
                  Establishment: 2
                </CInputGroupText>
                <CFormInput type="file" />
              </CInputGroup>
            </div>
          </div>
        </CForm>
      </>
    );
  }
  
  export default Addmember;
  