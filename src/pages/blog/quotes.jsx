import React from 'react'
import Layout from '../../components/Layout'

function Quotes() {
  return (
    <Layout>
      <h6 className='mb-2'>Quotes that have resonated with me</h6>
      <blockquote>
        <p>"All great and precious things are lonely.”
          <cite> - John Steinbeck, <i>East of Eden</i></cite>
        </p>
      </blockquote>
      <blockquote>
        <p>“There's more beauty in truth, even if it is dreadful beauty.”
          <cite> - John Steinbeck, <i>East of Eden</i></cite>
        </p>
      </blockquote>
      <blockquote>
        <p>"It’s a hard thing to leave any deeply routine life, even if you hate it.”
          <cite> - John Steinbeck, <i>East of Eden</i></cite>
        </p>
      </blockquote>
      <blockquote>
        <p>“When a man says he does not want to speak of something he usually means he can think of nothing else.”
          <cite> - John Steinbeck, <i>East of Eden</i></cite>
        </p>
      </blockquote>
      <blockquote>
        <p>“When a child first catches adults out -- when it first walks into his grave little head that adults do not always have divine intelligence, that their judgments are not always wise, their thinking true, their sentences just -- his world falls into panic desolation. The gods are fallen and all safety gone. And there is one sure thing about the fall of gods: they do not fall a little; they crash and shatter or sink deeply into green muck. It is a tedious job to build them up again; they never quite shine. And the child's world is never quite whole again. It is an aching kind of growing.”
          <cite> - John Steinbeck, <i>East of Eden</i></cite>
        </p>
      </blockquote>
    </Layout>
  )
}

export default Quotes

export const Head = () => <title>Quotes | Abdullah Odeh</title>