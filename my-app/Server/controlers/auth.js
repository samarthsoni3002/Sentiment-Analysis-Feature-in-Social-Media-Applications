const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SignUp = async (req, res) => {
    try {
        const { firstName , lastName, userName, email, password , confirmPassword } = req.body;
        
        // Check Weather a all input are complete or not
        if(!firstName || !lastName || !userName || !email || !password || !confirmPassword){
            return res.status(402).json({
                success: false,
                message: "Incomplete Credentials"
            })
        }

        if(password !== confirmPassword){
            return res.status(500).json({
                success: false,
                message: "Password and confirmPassword does not match"
            })
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
    
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new user
        const newUser = new User({
          lastName,
          firstName,
          userName,
          email,
          password: hashedPassword,
          userImage: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        });
    
        await newUser.save();
    
        res.status(201).json({
          success:  true,
          message: 'User registered successfully',
          newUser 
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
}


const login =  async (req, res) => {
    try {
        const { email, password } = req.body;

        // check Credentials
        if(!email || !password){
            return res.status(401).json({
                success: false,
                message: "Incomplete Credentials"
            })
        }
    
        // Check if the user exists
        const user = await User.findOne({ email });
    
        if (!user) {
          return res.status(401).json({ message: 'User not register' });
        }
    
        // Compare the provided password with the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        if (!passwordMatch) {
          return res.status(401).json({ message: 'Password incorrect' });
        }
    
        // Generate a JWT token
        const token = jwt.sign({ userId: user._id , email: email}, 'Project', { expiresIn: '24h' });
    
        // Save token to user document in database
		user.token = token;
		user.password = undefined;
		// Set cookie for token and return success response
		const options = {
			expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
			httpOnly: true,
		};
		res.cookie("token", token, options).status(200).json({
			success: true,
			token,
			user,
			message: `User Login Success`,
		});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports = {
  SignUp,
  login,
};
