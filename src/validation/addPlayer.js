function addToTeam({ player, currentPlayers, maxAmount, team }) {
    const prevPlayers = currentPlayers
    const prevValue = getTeamValue(team, currentPlayers, 4)
    let newPlayers = []
    if( currentPlayers.length === maxAmount ) {
        currentPlayers.shift()     
        newPlayers = [...currentPlayers, player]
    }  
    newPlayers = [...currentPlayers, player]
    const newValue = getTeamValue(team, newPlayers, player.element_type - 1)

    let result = {}
    const { isValidated, message } = validateTeam( newValue, prevPlayers, player, team) 


    if (!isValidated) {
        result = { newPlayers: prevPlayers, newValue: prevValue, message }
        return result
    }
    
    result = { newPlayers, newValue }
    return result
}

const getTeamValue = ({ goalkeepers, defenders, midfielders, forwards }, newPlayers, position) => {

    const team = [goalkeepers, defenders, midfielders, forwards, newPlayers]
    team[position] = []
    let value = 0
    team.forEach(pos => pos.forEach(player => value += player.now_cost))
    return value / 10
}

const validateTeam = (teamValue, prevPlayers, player, team) => {
    const teamNames = ['Arsenal', 'Aston Villa', 'Bournemouth', 'Brighton', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Leicester City', 'Liverpool', 'Man City', 'Man Utd', 'Newcastle', 'Norwich', 'Sheffield Utd', 'Southampton', 'Spurs', 'Watford', 'West Ham', 'Wolves']
    if (teamValue > 100) {
        return { isValidated: false, message: `Team value too high to add ${player.web_name}.` }
    }
    if (isPlayerInTeam(player, prevPlayers)) {
        return { isValidated: false, message: `${player.web_name} already in team.` }
    }
    if (tooManyPlayersFromOneTeamToInsert(player, team)) {
        return { isValidated: false, message: `Already three players from ${teamNames[player.team-1]}.` }
    }
    return { isValidated: true, message: null }
}

const isPlayerInTeam = (player, prevPlayers) => {
    const playerIds = prevPlayers.map(player => player.id)
    return (playerIds.includes(player.id))
}

const tooManyPlayersFromOneTeamToInsert = (player, team) => {
    const values = Object.values(team)
    const teamIds = values.map(positions => positions.map(player => player.team))
    const flattenedTeamIds = [].concat.apply([], teamIds)
    
    if (flattenedTeamIds.filter(id => id === player.team).length > 2) {
        return true
    }
    return false
}

module.exports = addToTeam