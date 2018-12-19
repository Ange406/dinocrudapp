tie this together with react: Check.


Tomorrow

First Things first you cannot launch adonis or react from the code/dinocrudapp folder
you have to cd into the api (adonis) and client (react) folders
adonis serve --dev
npm start

Second The reason that we keep having to change ports
Control + C kills the node process (good)
Control + Z suspends the node process meaning its still running (God damn it bob)

To fix the problem bob creates from (control + z) (there is probably a command out there but killall node didnt work) close visual studio all the way and close chrome all the way

Third the Edit and Delete buttons are fixed (we werent sending the functions into the other page)

Fourth i have no idea how update was working.. because we had axios.delete instead of axios.put ... either we cmd+z before we pushed it ... or we just thought it was working because we had 200 spinosaurus of different spellings

Fifth NavBar has some problems but they will show up when small now


Create Second Table
 Pick one Idea: 
 species category <or>
continent of discovery <or>

Tooth Style <or>
Hip Style <or>
Beast Foot or Lizard Foot  <or>
two foot three foot red foot blue foot <or>
plated back or na  <or>
Land,Sea,Air <or> :star:

OneToMany or BelongsTo



//Defining a relationship
//////////////////////////////
const Model = use('Model')

class User extends Model {
  profile () {
    return this.hasOne('App/Models/Profile')
  }
}

module.exports = User
////////////////////////

 //create a dropdown 
 //onSubmit button --> it will link ID to the route
 