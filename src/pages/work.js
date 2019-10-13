import React from 'react';
import { css } from '@emotion/core';

import { Layout } from '../components/Layout/Layout';
import { SEO } from '../components/Seo/Seo';

const WorkPage = () => (
  <Layout>
    <SEO />

    <article
      css={css`
        display: grid;
        grid-template-columns: 1fr 3fr 3fr 1fr;
        gap: 3.2rem;
        grid-column: 2/3;
      `}
    >
      <section
        css={theme => css`
          grid-column: 1/5;

          background-image: url(/images/svg/figures/figures.svg);
          background-repeat: no-repeat;
          @media (${theme.breakPoints.medium.query}) {
            grid-column: 2/4;
          }
        `}
      >
        <h1>Work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed
          quis itaque illo molestiae alias accusamus animi voluptatum reiciendis
          beatae.
        </p>
      </section>
      <section
        css={theme => css`
          grid-column: 1/5;

          background-image: url(/images/svg/figures/figures.svg);
          background-repeat: no-repeat;
          @media (${theme.breakPoints.medium.query}) {
            grid-column: 2/4;
          }
        `}
      >
        <h1>Work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed
          quis itaque illo molestiae alias accusamus animi voluptatum reiciendis
          beatae.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
          dignissimos fugiat vitae mollitia voluptatem numquam labore est
          perspiciatis harum voluptate.
        </p>
        <p>
          Quae placeat doloribus repellat. Aspernatur tenetur consequatur animi!
          Sint dicta delectus odio, dolorem autem cum eius animi amet fugit
          nisi?
        </p>
        <p>
          Velit impedit dolor illum maxime sapiente dolorem eius obcaecati magni
          consequatur maiores atque, tempore aperiam tempora mollitia incidunt
          explicabo laboriosam.
        </p>
        <p>
          Ipsa sed, minus soluta, dolorem voluptate amet fugiat mollitia
          repellat, fugit quas eligendi perferendis cum saepe tempora quaerat
          minima a!
        </p>
        <p>
          Voluptatum facilis sunt, natus culpa eius harum nam consequuntur
          repudiandae ipsam aspernatur labore in voluptatem adipisci voluptate.
          Consequuntur, adipisci et!
        </p>
        <p>
          Accusantium est officiis earum, nemo nostrum facere magnam atque
          provident voluptates debitis eveniet non. Magnam, id enim! Officia,
          vel aspernatur!
        </p>
        <p>
          Omnis dolore assumenda quasi harum, alias magnam voluptatem tempora
          quam accusantium quis, enim perspiciatis numquam sed doloremque
          aspernatur repellendus. Facilis!
        </p>
        <p>
          Temporibus maiores enim eaque et ab debitis repellendus cum error modi
          ea, ut eveniet, voluptates voluptatum distinctio laudantium
          consectetur ducimus.
        </p>
        <p>
          Delectus ratione esse ipsa, vitae mollitia deleniti rem quo voluptates
          tempore molestiae explicabo dolorum unde aspernatur iste. Ab, vitae
          eum.
        </p>
        <p>
          Nemo atque minima recusandae tempora aliquid esse earum! Architecto
          voluptate et id inventore obcaecati corporis quidem ab ipsum in
          officiis!
        </p>
        <p>
          Distinctio maxime aut non, accusamus, doloremque totam veritatis
          veniam iure inventore pariatur ducimus minus vero aspernatur? Enim
          odit facilis earum.
        </p>
        <p>
          Autem tenetur itaque quas? Velit, quisquam, dicta corrupti tempore
          inventore mollitia in modi adipisci est facilis cumque fuga, tempora
          aut.
        </p>
        <p>
          Nobis, eaque dicta sed, accusamus cumque quae, maiores voluptate ullam
          fugit et harum debitis excepturi asperiores ex. Adipisci, illo rerum!
        </p>
        <p>
          In saepe iusto repellendus libero quis minus tenetur impedit. Aut hic
          quam natus culpa possimus ratione perferendis numquam esse eaque.
        </p>
        <p>
          Recusandae sit, hic dolorem similique libero doloremque tempore
          commodi, repellendus ullam labore amet nemo vero obcaecati dignissimos
          beatae repudiandae facilis!
        </p>
        <p>
          Vero expedita id error, est, dolorum maiores aperiam repudiandae
          aliquam vitae provident obcaecati quasi nam unde. Praesentium eum ea
          numquam.
        </p>
        <p>
          Recusandae officia, veritatis facere perferendis inventore illum,
          tenetur nisi laboriosam soluta a eveniet esse animi reiciendis? Velit,
          facere rerum. Impedit.
        </p>
        <p>
          Animi nobis fuga obcaecati saepe, recusandae deleniti consequuntur
          iste, eius in officiis fugit! Aspernatur distinctio temporibus amet
          harum, consequuntur beatae?
        </p>
        <p>
          Architecto quas in, laboriosam incidunt officia odio deleniti labore
          voluptatibus aspernatur esse pariatur rerum facere! Error placeat esse
          omnis magni.
        </p>
        <p>
          Ipsum quis quos sed. Porro alias possimus consequatur omnis doloribus
          aut, ex quos quas maxime sint? Doloremque maxime dignissimos repellat.
        </p>
      </section>
    </article>
  </Layout>
);

export default WorkPage;
