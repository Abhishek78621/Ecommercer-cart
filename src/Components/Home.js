import React from "react";
import Products from "./Products";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div >
        <Products
          id="1"
          image="https://www.fireboltt.com/cdn/shop/products/epic-plus-gold-black_1_720x.png?v=1671192284"
          title="Apple watch max pro"
          price= " 4000"
        />
      </div>
      <div >
        <Products
          id="2"
          image="https://miro.medium.com/v2/resize:fit:679/1*4q5ZWAJpxhDPr5MRUEbWhA.jpeg"
          title="boAt Wave Elevate Smart Watch with 1.96 "
          price="520"
        />
      </div>
      <div >
        <Products
          id="3"
          image="https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/google-pixel-watch/hero-static/charcoal/google-pixel-watch-charcoal-device-3qt-left.png"
          title="boAt Wave Elevate Smart Watch with 1.96 "
          price="930"
        />
      </div>
      <div >
        <Products
          id="4"
          image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAlKtrQpOU4yt3H18tR4iHcChH7pYRKZKCRQHitbKPpCQik70g7yHOz-8iqZ2z_q8G6JI_ny7NJGsYOtIGVobiJPoXgHRXzZPZgno9kiyMBrOtzyKu4T6hAmg"
          title="boAt Wave Elevate Smart Watch with 1.96 "
          price="760"
        />
      </div>
      <div >
        <Products
          id="5"
          image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQwTZyjswdSJAIZpZqEQn9UjDFphfyS9InoOOsXGFL5KNkppjQDvhWxxtALWCUvwqd1pCGtSK2cu-IRf_-pk6JftHRJswyyG7hPvIJ9dUMV94oBObMsbeab"
          title="boAt Wave Elevate Smart Watch with 1.96 "
          price="1260"
        />
      </div>
      <div >
        <Products
          id="6"
          image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSkB2UcqgW5Arbp_w-M6rrB78il-ED1C7sen7gZ-vbY_oOSAiAvdk5cQrolPl6ozv-FQ2bpUGIIZPFFb8ZjrW58CT0fjuUxCb0oC_0pQDJNmfHBPm4xVQTeGg"
          title="boAt Wave Elevate Smart Watch with 1.96 "
          price=" 2060"
        />
      </div>
      <div > 
        <Products
          id="7"
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUYGRgaGBgYGBgaHBoYGhgYGBgaGhgYGBocIy4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHTEeISE0MTExMTQ0MTExMTQ0MTE0NDQ0MTE0NDQ0NDQxNDQ0MTQ0NDQ/NDQxNDQxNDQ0ND8xNP/AABEIANwA5QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAEIQAAIBAgQDBQYEAwYFBQEAAAECEQADBBIhMQVBUQYiYXGREzJCgaGxFFJy0RWSwQcjYqKy8DNDU4LhFzRzwtIW/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAhEQEBAAIBBQEBAQEAAAAAAAAAAQIREgMhMUFRE2GRIv/aAAwDAQACEQMRAD8AJNZ0qu1nWiQWBUaJqa4PYGlKcrRVxbQMmq9yzpQIHEVwGlRMhFIzwKKRrdIlupbTzvUyipsVmaKj/EEVLeTWoHt1Ras4vxq/YxINAipFdavEGg04YGp8OlZ2xjNaL4LGgbmoLN+3UarVhHDUxhFAyKcKSlNA3LrSPUiDSmZdNaoYqzTGt61yBhrUqajWgZNIi6zXMhmuJjSoFNOcxrTVIpaCNxJpSKdTQ00Da6kIrqCe5b1AppSFJqa3q58qfeAgDrVQPVIWmvyqxet6gVHkmgr4m2NKqX7WgohiEMimYlNAKKHBYqW28VOqSKjupC1n2IFeTXOaiSaWNa0HlNKh9jU2anI0mKgpNYPKmi+y0W9nVW9h9NRQWOFcR1gmiZxQJispcslTIp1vFON6g1yNUhFA8NxAaa0TXFAwaosc4rlM1wcHWlMAU2ENRXGjakLGKRUneqGe1I1NSuQdaZdSdKjC6b1BIKTPFMIIqRII86BqGaVo5VF4UzNrFBPFdTVfrNdRFrD705zLwOVJh1gE03De+TVVJdTvCokXUmnOxLmktt3aIayyZqDEJrVlNTUdwa0VXw6b03FiBVy0mlV8YkkCgFlaVU1qZ01qdrcAUFC8kClS2ZBqxfTSpEWY8qxRBm1qO7dq06a1Vv2WY6KT5CkgjMGpEwqkailXht4+6jfb70TwfDL/AMSgDxNa41OWLPXcIQTlqO1i3XQzWtPBHJkso9TSN2aUjvMT5CKsxqc8YB4fiY60Rt4sEb1YHZiyDJk/Or+F4XaXZB89aswrN6kD1uAjepbq6Uet4VOSj0pbuGU8q1wZ/X+M1hyTIq5a4a7bRVbiGGKNK0Q4VjZ0NOEP0puJ4Q4WRB8qDveKnKRBFbi081ne0WAjvqPOrxjPOh+AxKZ++oINamxhLRAKotYStL2d4lPcY6jbyqyRm5UdFhfyj0rqkrqujdZdtEpuEGlWnwTlYy8qWzwxwNYHzrlxr0cp9DmuQWpyEZYogODEzmffoKnTg6Dmx/34VeNZ54giPFMZ9d60S8Ltj4QfPWpkwqDZV9KvCp+sZ+05I0Un5Uj4a47SEMen3rThAKUirwifozI4TcOsAeZ/arP8HYkS4EdKORXVZjGb1Mgf+BIfeYn6VPb4RbHwz5k0RpCacYzcsvqsmDQbIvoKlFsDYCnzVTGcUs2hN24ieBIn0q6hurWWkArMYrt5hE0Uvc/SsD1JoXif7SE+Cwx/WwX7TVRvIpprzh/7SLvKwg82Y/tUf/qPe/6Nv/N+9EekOKqvpWGt/wBpL/FhlP6XK/cGrtr+0HDto9q4niMrgfUH6UVs7NyrM1mMB2iw1w9y8s/lbuN6NFHrVyaCLiFjMtZ1SUetYTNCuI4LMJG9QXeH4sMN6I3bYdSDWLs3mttR7BcVU84oAHE8CbbkEaHY1RRyrBlMEVusRbS6mU1mOI8He3LDVevSgNcO45bZe/AYb11YjE4hlMCB5/SkrH6RrjWt7O9pfxBZHTKyrmLD3IHjyNHUuq2qkHyM15lbxJQNkJg++nuuDvBIlW8xMeFVrWNRbhFq6VcAMQTDa8iQYJ8DFZ56dsulPT1ma6ayHZ/tQ9xxZdSzGYdRER+cf1HpWpS4DsQfIzXXHLccMsLje6Wa6aZmrs1aQ+kpuauLVFOppNJmphaiHlqD8a7Q2sODmMsOQ69D4+AqPjXFMgyIe8RqR8K6Tr11A+fhXj/FeItdcsfdBOUcgP361na61N1oOM9tMRdJVG9mnRdD61mmcsZLSTzOvqarBqczFTHOtJd3uIfhYEsfXuj5E6n0qZjhl2ZnPgpHylzB9KDl64tXS5Yydp/qbGb2Lwp93D3Cf8VxV+iIBQ7EOpaUXIOSyW+ppeHpncIIkkASQo16ltAPE1vOH8NOGZrmFuWMQyoyYkF/Zexzb3LdwwQoiM41nlrpyuXrTNrBI6RDK084IH0I0q5bTDMgl3V41XKYZvyh5IHmQK2+NxCXMJmb2L+yclr10niCBGEBWdIdNR8SEeNYrtHfwrOn4ZYOQC8VVkttc5m0jksq771LN+27lua1DMTwh1AMg5jCwQ06co1PPlGm9LhOJ4nD6pcdQDH5kkHYg6ULRyNQSDyI0jyqd8Y5JLOTIykzrHStTx38sd2+4N/aCDC4lI/xpt5snL5Vt8JjEuoHR1dTzBn5V4HNEOD8ZuYdw6MY+JeTCo29rv4JHoRieGsmq60vCe0CXURwYzaeAOkgnkdR60dS4DoabWzTO4fHuhg0Yw/E0cZX2Igg1JieGo+o3oLiMA6Gdx4UQ3F9lQ5kZXXXLJKsoJ2J5jpSUxMYy6AmurHHFrlWYvXnKqqhX70d/ulUjU5h3iZiAJ51GHyBmKArqXEwwgTMiCx0gaHyqzjbAKuyZSbbsj5JyZlMHRu8jc8pkEe6TtUdp3yxdBP5c2lxBA589ZOU7bTXGvWnwmKKD2iSCyiQYW4gI9DoYmPSkw990OezcYnc7h+veWYaq7XiFy5M7FgFyiH1ksWbYAf4vKp76XbXeRUeJaJXNMec5uXOm6ajS8H7WK7Kl6FdiFVx7rHoeh+nlR98WgOUsoPSRNYXDF2Vb7KqPuFuKmbw7wAI8jUWJxTPAYHVgO64gzu0nSOssPntW51LHLLpS/x6H7SmtdHWsRhReQ/3V+2VnbMSsfpj7UTTiecwkwPeeBkHWTJy+A3PjXSdSMXpWeK0D3xQrE8ZkQgP6ucdR08zVW4zg+7mn3EggtG5I2CzGrQB0Mio04Lecl7mIKk/Cirp07zgkxWcs9+Fxw15D8e2jkaQiSJ5SxJ6k15hcBUlTyJHpXpRm3fZLxL2yTazlVEkAEMRt8QBO3hWV7R8DZGLJ3h1/MOXz+4jwlhe51MdzsrcBcSgJ0F5C3ky5VPyaKg7RW2TE3A3UEfpIEUNR2WYMSCp8QdxrRXiXGRiLKLdQm+ndF0EQ6dHWNT5fvW7P+tszKfncb92E56O9juBjG4kYdrns1ys5bQsQkd1AdC2s89FOlAcRaYKZUiQYkETpymvVOPXeBZLV9VhmcAnCt7O5abKWzNblY1B1jeK04h3G8PwvBXmw9zCYxiIm9ny5gQDmQEgMPIRINQ8Z7JZ7H4vh1579rKQ9s924qbspCxmA0lSJ0B1p+O4faxxRrfF1usoypbxYNpwJ1AMAEnTXKZ5mp+HcO4jw9xdS05XTNki5buL0bLJjmGgEetZt1Waxb8cu+x9gpS3aYKHCIiG6F2NxwMz8zvGpqRcZbI9kJtqB3w4LOx5g5R3dhqRPIEV6Tex3CQf4g1o+3B/9tpPtt84Q6T/AI9vnXnHaXtFext32t6BEhLa+6i9J3Y7STv4bUl2oS7iTlmOUmabmpIozZ4UltBcxJIBByW195jqBJkEa5dpgMCeYrSouAWUuXltuWCuGAKxOYAkbg9DScTwqoQByZ0bxZHK5vmBNO4RiLaO1493IO4kliSRG8a8/WquMxZeJ3BdmPVnbMxHhXOcud+ajd1xn1ouwmIm69k+66FgfyumoPoSD4V6LZd8iODMqJ8xow9Qa8//ALOuHs183YOVVKjxJ3/341uuHcYQXvwziA+Yo3LOXclPMiCKu5ybmNuMX8PxKNDRG3iVYa1TxPDg2ooXctOh0rTA1e4XbYyNK6hKcXI0rqaA/A8VS8crokEy6ZRLtGjA7PyOUidBBMVcu8HRxNlwBzR5e2TpIg96236SPEGpcd2WRtUYp4HUT9xVQ4PE2jmKl4gZ7Zl46EH3h4EGOtccsLHfHqRmOI4YKCy7AkMuYNlIIBhhoyyQJ0IkSBNWuA2h7Ns9z28mQo7+RRMKCvenqZ5UWxPEHlHtWluMtzPcVSEuEezZO6j7ESugMQI50j8VwF4gX0Ftxt7ZDbdTt3XiJ8mrFje9gT3FIcLnUEEKCdjtJAjbkPKam4fbt4lGQ4d8olGd2CBmG8RAJ/SKIvg0dWLM6ILgth7jKzwSFR0uGc6sWAh5330irQ7OrplxuIEDQBkKxy0yfarIWqnD+DuhFuwEtoCCxIzsRILEkkMTyGsfKi3E8OiKqlHIZ9bi/wDKIGZXcbZZG+3WhzcTbDWrt0sbyW3Fu5KtbcNmCAwxKsJYGREgzWD7T9r7mK7iylr8uxf9UcvCtTFLdRvcF2zwzuFc5STk9oYCMRsV1nKTsTtNHcZjERQcwlvdEgz4+IrwCZ50S4diShBHKnGJK9Sv8QtPdTD3JHtM5RtNXICsvQaEEdYIqrdttZzWb6l7RnI+pZBOrR8agSOq8+pyrW7l9rLroFuoM3OHYISPDWvT7OS/aQt3lIBB5g8iDyPQ700PPeLdllce0snMpEgrBOp0BHM7aDWspjOF3EJzIfMA7dSNwPOvVL/Cblpi9ljEyVEaxr30MK/noepqk+PRzlv2JYZiXtiWk7E2zDgeKhh41ZlYzl05XmqYrkyxtJXY+aHQnyin3bVtgChg8+9EnwVgIG2mY1un7P4W+TkdSQJOwefEEhp8D4ULxvYZ1LZW2iRoYJGwmJ9a3M57cr0r6ZFsI0TGniDGnjtV7h/FMXhj/cX7iR8KtK6CT3CSu3hVu92YxKE6EdSM31yg1Tv8IxG7IT4lgP8AUQa1conH7DMXxW9ednuuXdtyf6AaAabCo8Ng7l1wiKMxmJZVGmp1YgUp4Xd/J/mT/wDVWMNwDEOYW3Oo+O35j4qnZON+LNrgDowZ8RZtkHTK/tHB8Ak+POuxT2EJYu165r3njLm/+NOU9T8qN2OwGJdC73EB5KWZyfQRT8N2AcnvuN9QCPDpPUdKXKLMMqw7sWJJiTyAgfICjvA+zNy+wLAqmngxHz90eJrb4LszhbHeZgW1ievhEmrl3iqjuW1C6RqBP8vI7asR8655dT1HXHo+6kw9m3hrYRYEAz0C8266Vj72FuC87l1OZg2WWU5R7hUkZQQAIPX5itBiEulBfIGVSDcQkHOs6MWj3h0G1WMfftOiuy91WJOytBWRnO+XVTp4RvXPbpppOCY4XrYYmWGj+fWPGrt2wDyrA9nuMn8SIDZXOSNAMvwkIPdAOg/VrXoAau+N3HDPHVCb/CFJmuotNLWmDSaWow0iacDRVbG4C3cHfQE9dmHkw1rP8U4M+XuOHX8l1Q48g4hh9a1NQ3UmpcZfKzKzw8n4jw62ARcw72wdzafMh5zlI+9DEwGG+HE3U81bT+U16bjrBQnTumguO4LZuCcgDfmGnrFZ4xqdSs0/Z7GuhQDEOhjQuuVhIKmGfbQGol7B4k/Aq/rdB/pmruN4bi0GVLrlBoAHYQByiaB4mze+POf1Et9zU1WrnF9+x7J/xMThbf6rhb/6iitj+z1igcYlHkZlyJ3X6ANm2PWslljlWj7Pdo3sJ7MMAMwYZpKwfeGgMdallJlKA4jHOrhiSvs3BUdGU6E9T4V6L2G4yjp7P3SB3k5r0IH5OXht41keLcIfEM+Js5GLMzexUjOviAffJ1Pd1ExBoBh8a6OGVijofEMCNxrt5U01t71ct1m8fxfCe1OHvFVdYj2i5VOYAyjnTn1obwLt4jZUxPcYwA4BKEnr+X7VqsRhbGISHRLif4grj5dD5VLj9amXwHxPBrbrmVzEaTluLH+HNJHyNCPYXUJCXWAnYO4B+Thx6UQu9i7SHNhr17DmSYRyUk9UbceE0TOAOUByrkAAsRlLEDU92ImueXbw3jfoE2KxUE5swmW7iP8AVHXx5fKuPHbxzAohzAAnLcUiJ/VrrRZcOUMhSPJv3BpuIS0+rp3ubDQ/OIB9KnKtcYoDjVxyYspJj4n6b+541cscTusxm2gB0aC+3hKDXWon4dbALI+o5Eid+kUT4Tc9suRjDIDBO5WdvGKu0si5h8TaCsXGp6sRtQnFYgtJGUdNSw+kferzGyrDM5YAyQBv50IxuIZ7xW2g1ICgAKSI6j57yKb+kxm1bESdCSRzUHLPnGpHhNUsdxE2rZyKiyYAyKfOcwJP/mjl827aMzgo6DVW2JPu6jaeu3ltWdLpcId9fZqTliQ20Mw5x058yKvH2mV9DmGxRu2EFxMjXAVQTo5QTnAOp0mRPTrXcOuh0ZHgOAUuCPeXXIwHIj3dPCgXDOLIzvbdwM7B1lg5S4oGR9NjyI5gxyFWMe4ZxeVW9mzFGYSA/wCbKehExOhg7ginlJ2DUBR8yHVWlSNdjI1r1PBYgXERxpmUNHSRqPWayeLw9o5LmVQqLlee6ndgjM3gJny50R4L2lsXXFpA/PK5ACMQCTl1kDTSR0FdOnXLqzc20M0lJXV2cUKPFSgxVO1cBEip1aR41NCwDSUxHp01Q27ZDCDQXFcMZdU1H5f2o7NLFBkXnYgg+NV71hW3ArXYjBo41FC8Twcj3Tp0qDH4rhKHYUHxPCY2ra4jBOu6nzGoodft1NG2W/DuiyZn4dY069aixWLF0quIT2g1HtBAup0hjo430aflR3E251Mn50Lv4cHlU03yvhQtcOWQ1u9bcqQQjg2yY1+Lu5v+7Q9a9JwKAgESp01UwdtiRo3zkV5z+DGsGKL8ExlzDmAM6E6pOo6lDyPhsasS/Y3ga8uzK46N3D82WR/lFKOIMPftP5qA4/ynN9KiwHELd0SjSeanRl81Ovz2q2RUuGNJnlELcTsH3ny/qDJ/qAqJ7mHbUXk/nT96sEUn4cN8AP8A2g1i9GNzrUFxF9M2VXTzzL+9WcPft2mVxftyCJ7wEg6Hn/uKv3eHJEFFBjTugf0oJxDs0t1wi93NtA+f9DSdKfS9a/BLHY/Ckl0cuSZyorMs8+8BAqlY4jNxXyZANFkqCTqNhPXmelVLfZi/hyVR/a2zuRHdbymazvEsaj2lRGzFm77DkAfcU+PM0uEjWPUtb2+/4gqgQEz3iRpkOjK3UHp5Vn8ZwS9Yv5bMlD7jEjuq2mRife3I8vqG4d2xvoTaTvRp7gciP8QEkedEcH2muhxeuuMk5GZvgLfEF5xpPOOtZ1pvcpvEEuWna0+UxG6rqDqCDE/XlRrCXs1kW3SAVW4M3vPkbQLHOQdec7a03jGLspF7EsjhRKZSIuSO4oHxa6+U8hWc4Zi8ViMSmJYsuv8Ad21EjJEEZdgkTLHfepotXeEXrmIN+1dtAK8lBqArJoesmIE+FFuz/DGVluQFMgkDVVAOiKPEferdjAjNedGVnKJkZ5OWO9JA1AJ1jwNFeEYcqihiWIJljuxB3MaSYprdiXtKJ11dXV6XlZrg+L+E8tvKjQbnWKw90ggjlWswV8OoIqS7Kug86kU1EhiucxVVNNOVqgz0oegszSioQ1PVqBWQHcVUxHDLb7r8xVwGloM5iezYM5W+RoTiOzNzlBrc0hFB5nc4BdHwU21wu6p9xq9Nyim5B0qaHn6YFhqUYHrBEfMbVdw+OuJpmzDo4zfXQ/WtoFHSmtZRveRT5gGgzVvj7Ke9hgw/Mj6/ysP61ZPa+wqljauSBOQBcxjkJI1o1+BtH/lp6CgPGuFKql1ErzUjYeFSyks9xDi+1tlvZMsn2jhFUwmTQnM5bQDTlNJd446OC9somozqS8TzlRlHrQ/A8Fs3XGYsjAyhEET4q0g+VaNeEBP+Wjf4rcox/wC0n7NUvKOk4mcIxyT3HDoxOVh1G4NY3t1wd7F1btlf7u4xkAaI5EnyVtT5yOlaJcK6PeLlFttla0MjI4YQCGYiHPjJ5UYeymKw7W32ZYnmrDZh5EVfMPFeO2tJGgncroSRtPWkwpdhFzLBOivqSORI5Vosb2NvKe4Z30MH0K/sKzuOwtxD7JlKkQWJBhehrnuOum47NWQUY+zRlLlWJgkDKhUr4Tn06x8jnAMCqM7ASSx+Q/L5Vnuwl1cly3mkyjgEySBKsY849aP/AMTXDq/dLu7nJbXVmgCTHJR1OlYvlqzsdgLKWCyhoZ2CrJlnbU5p5mPSAKqYm7cTEhEZ8xZBln3V0J02jViT4mp3LO2HhNSUdtIIAyk5uYO8nwo5hsCiO77u+7dF5KPD71rGd2MspInrqdFJXd53mlh6M8KxWRoOxrO23ir9l5rE7NWNwjSKdPKhXCMXmGU7ii0VtlHMU7PSETpUeagmV6kV6q5qcr0RaD1IHqqHp6vRVkGuqFXqUNQLXUlOFAldTgKcEoGim3LYYEGpcopBQYnGWmtOVBMTK+VanhWN9og6jehvaW0IVuYP3qhwa+UfwNBrjQjhq5LtxBsGkeTaj6RRUuIobge/euuNpVQf0qAf60EmNwBdgwjQ5lEshBiD3lmQehFDXBDP7a0QCRDDvrAUDUqJXbp86N4hnnurPjMVGvteij1P7Vi4StzqWMhxXhFgL7ZMwggZre6yYLSCIAnWmYHBsjHL/eXLgGV2YlsvKZ2ABnetc/DQ5lonqoCn1GtPs8MRdl1giSSTB3Emsfm6ft28OwyKirmKlwqqzaSYH2qRsUvKT5A1OuEA+EelS+zrpMdOFu73UBdJ+A+orqv5R1rq0m3ifCsX7RJPvr3WHjyPzorYet+nZ7CgyLCAneFAmnHgWG/6a/as6alY7DYjKwYcvtWtweIDqDNKez+H/KR5MasYbgyJ7rN8zNWJTXWoLo0DDyP70TGF8aYcD4+dUDDSTV08ObqKYcE/QUECtT1NKcM4+GmMrD4T6UROpqRWqk1+PhPoaT8WeSH56UURDVIGoULrnaB9aeEc7uflpQFFIpHxSDdh60OTCzuSfU1Zt4KOUecCgd+NXkCfl+9OF5zsnqakt2lB1Yfepc6D4j9BQUMRgDcEO2ngP60xeD2LYzuNAJLMSfvVy7xJF90Fj0/80Gxli7iTF1gqTIRBH8zc6IEYlzibuW2Dk2G8ADn51rOG4UW0CjlUWFsJbWFAAFWkcnWgslR1psr41ATTaKsm6OQH3phvVCTSTQStdNML00mkoHzSU2uoMB//AHlyJ9mvqadw/t+XcobeVgJGu45x/vnWOcbVRxNtlIdPeXUftWJW7HqtvtUTun1q0naSfgP0rDYDFB0Vxz3HQ8xRO09OSabTC8VZx3V9TVoYm7+QHyYVmuG3crRWosXRFajNhv4xxvbb6fvXfxI80cfKftVjPSF6ohHFF5hv5TTxxJOZ9dKY941VuEHkPSgvDGIeYpfaoelCXtKfhFN/DL0oaFyyeFMZU60N/DJ1+pqN1tjcn1NDQm7CPfMeBj7VWfL+b60MvYi2Ov8AMaHXuIclB+dTZoeYr1PqaYbiDmKBWrV19iY9KK4Pgc6uS3ntTa6TrjFOiyfIT9qt20uNyyjqTr6CrVjDqghQBUoFVDLWHA1Jk9T/AEFSmkFLFA2uNOiuy0DK6KeR40NxPHsLb0fEWwRyDBj6CTQEMtKFrN4ntxhlnILjnwTKPVyKHXO2l9/+BhdDszFm8jCgD/NQ022SkrAvxriLQZRfAKoH+YsfrXVNw434ybpr8hUV233atnc+dQXq5O1nZT4ViDauZG9y4f5X5HyO1a20dKx2PQENNaXgd4vZRm1JGprTA8rRrVleIstVF2pVQHeqLf8AGG8aT+NHxqA4dfGoLmHXxq7Re/jngab/ABvzoU1kV3sR402CTcZaozxZqpJZFXLWEXxqIY3EWNMFx32mjeGwNv8ALRGzaUbAVoZ7D8Ldve0+9GMJwZV1Op8aLIgqQU0IbeHUcqsAU24Y26V552k7b4mzc9nbFsDqVYnf9UfSg9GikdgoliFHUkAepryG/wBocXcBLYm4Br3VIQDyyAH61f4RwZL6Z7jXGM82zfVgT9aJrbd4ntNhE97EISPhQ+0b0SaF4jt5YBhLd1z5BB88xzfSqX8Bw6LItgmR7xLdOR0olhbCrEKokawAPtWbW+AZc7X4x59lhVUby+dtPmFH1qpfxfE3968Lcx3UCjfbYEjY7mjiDf0+X+yadiEGnl9m0rNzrUwjMjs81x4vX7jzr3izemcn0irdns/YSO4TEAyTzEbCBvWiVBnX/fWlCDK3mPptWedrcwilhOGosZUQQQZCgHp/WpHtkuvhP3kf0oiv9R/qNJaQZieen2qbrUkCTh5JHQ/eloowAJ0FdVV//9k="
          title="boAt Wave Elevate Smart Watch with 1.96 "
          price="3500"
        />
      </div>
      <div >
        <Products
          id="8"
          image="https://rukminim2.flixcart.com/image/416/416/xif0q/screen-guard/screen-guard/n/m/y/k655-0-127-i-think-enterprises-original-imagpegjyd8ryprh.jpeg?q=70"
          title="boAt Wave Elevate Smart Watch with 1.96 "
          price="3060"
        />
      </div>
    </div>
  );
};

export default Home;