export default {
  /** 
   * Submits a users sign up form
   * POST
   * In: filled fields
   * Out: status
  */
  async signUp(data) {
    try {
      const res = await fetch('https://32f2jzoot4.execute-api.us-east-1.amazonaws.com/default/fe-takehome-api', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'text/plain',
        },
        method: 'POST',
        body: JSON.stringify(data)
      });

      if (res.ok) {
        return await res.json();
      }
      throw await res.json();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}