import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import jwt from "jsonwebtoken";

const router = express.Router();

import adminModel from "../../model/Admin/index.js";
import {
    loginValidation,
    addMember,
    errorMiddleware,
} from "../../middlewares/validation/index.js";
import authMiddleware from "../../middlewares/auth/verifyToken.js";

import memberModel from "../../model/Member/index.js";
import generateToken from "../../middlewares/auth/generateToken.js";

/*
METHOD : POST
PRIVATE
API Endpoint : /api/member/
Body : email :-
       password :-
*/

router.post(
    "/",
    addMember(),
    authMiddleware,
    errorMiddleware,
    async (req, res) => {
        try {
            const payload = req.payload;
            // console.log(payload);
            if (!payload) {
                return res.status(401).json({ error: "Unauthorised Access" });
            }
            let {
                memberName,
                memberType,
                fatherHusbandName,
                adhaarNumber,
                gender,
                dob,
                email,
                age,
                caste,
                religion,
                occupation,
                mobileNo,
                bussinessType,
                goodsService,
                locationType,
                bussinessDesc,
                annualIncome,
                sharePurchaseDate,
                houseNo,
                city,
                street,
                country,
                state,
                pHouseNo,
                pCity,
                pStreet,
                pCountry,
                pState,
                nomineeName,
                nomineeRel,
                nomineeDOB,
                nHouseNo,
                nCity,
                nStreet,
                nCountry,
                nState,
                iName,
                iMembershipID,
                iMobileNo,
                bHouseNo,
                bCity,
                bStreet,
                bCountry,
                bState,
            } = req.body;
            // console.log("Line 34", req.body);

            //mobile validation
            let mobileFound = await memberModel.findOne({ mobileNo });
            console.log(mobileNo, "on line 91");
            if (mobileFound) {
                return res
                    .status(409)
                    .json({ error: "User Phone Already Registered. Please Login." });
            }

            //aadhaar validation
            let adhaarFound = await memberModel.findOne({ adhaarNumber });
            console.log(adhaarNumber, "on line 102");
            if (adhaarFound) {
                return res.status(409).json({ error: "Aadhar Number Already Used." });
            }

            //email validation
            let emailFound = await memberModel.findOne({ email: email });
            console.log(email, "on line 107");
            if (emailFound) {
                return res
                    .status(409)
                    .json({ error: "User Email Already Registered. Please Login" });
            }

            let memberData = {
                memberType,
                mobileNo,
                bussinessType,
                goodsService,
                locationType,
                bussinessDesc,
                annualIncome,
                sharePurchaseDate,
            };

            let pDetails = {
                memberName,
                fatherHusbandName,
                occupation,
                caste,
                religion,
                email,
                age,
                dob,
                gender,
                adhaarNumber,
            };

            let address1 = { houseNo, city, street, country, state };

            let pAddress = { pHouseNo, pCity, pStreet, pCountry, pState };

            let nominee = {
                nomineeName,
                nomineeRel,
                nomineeDOB,
                nomineeAddress: { nHouseNo, nCity, nStreet, nCountry, nState },
            };

            let introuducer = { iName, iMembershipID, iMobileNo };

            let bAddress = { bHouseNo, bCity, bStreet, bCountry, bState };

            memberData.pDetails = pDetails;
            memberData.address1 = address1;
            memberData.pAddress = pAddress;
            memberData.nominee = nominee;
            memberData.introuducer = introuducer;
            memberData.bAddress = bAddress;

            console.log("Line 160", memberData);
            let member = new memberModel(memberData);

            await member.save();

            res.status(200).json({ success: "Member Successfully Added" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
);

router.get("/pendingmembers", authMiddleware, errorMiddleware, async (req, res) => {
    try {
        const payload = req.payload;
        // console.log(payload);
        let allData = await memberModel.find({ requestStatus: false })
        // console.log(allData);

        res.status(200).json({ success: "Member List That Need to be Accepted", allData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/allmembers", authMiddleware, errorMiddleware, async (req, res) => {
    try {
        const payload = req.payload;
        console.log(payload);
        let everymember = await memberModel.find({ requestStatus: true })
        console.log(everymember);

        res.status(200).json({ success: "All Members", everymember });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


export default router;
