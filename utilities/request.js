const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

// fetch All Properties
async function fetchProperties () {
    try {
    // handle when domain is not available yet
    if (!apiDomain) {
        return []
    }

    const res = await fetch(`${apiDomain}/properties`, { cache: 'no-store' })

    if (!res.ok) {
    throw new Error('Failed to fetch data')
    }
    return res.json()
        } catch (error) {
        console.log(error)
        return []
    }
  }


  // fetch Single Properties
async function fetchProperty (id) {
  try {
  // handle when domain is not available yet
  if (!apiDomain) {
      return null
  }

  const res = await fetch(`${apiDomain}/properties/${id}`, { cache: 'no-store' })

  if (!res.ok) {
  throw new Error('Failed to fetch data')
  }
  return res.json()
      } catch (error) {
      console.log(error)
      return null
  }
}





  export {fetchProperties, fetchProperty}


