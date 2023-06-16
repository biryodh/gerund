import withJoi from "next-joi";

export default withJoi({
    onValidationError:(req, res, error)=>{
     return res.status(400).json(error.details[0]);
    },
})