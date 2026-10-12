from PIL import Image, ImageDraw, ImageFont
import os
os.makedirs('public', exist_ok=True)
def font(sz):
    for p in ["/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf","/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"]:
        if os.path.exists(p): return ImageFont.truetype(p, sz)
    return ImageFont.load_default()
# OG image
im=Image.new('RGB',(1200,630),'#0b1220'); d=ImageDraw.Draw(im)
d.rounded_rectangle((70,70,150,150),radius=18,fill='#c6f135'); d.text((110,110),'RT',font=font(40),fill='#0b1220',anchor='mm')
d.text((175,88),'RecruitmentTools.org',font=font(44),fill='#ffffff')
d.text((70,230),'The recruiting stack,',font=font(72),fill='#ffffff')
d.text((70,315),'explained.',font=font(72),fill='#c6f135')
d.text((70,440),'Independent ratings of 50+ recruitment tools across 10 categories —',font=font(28),fill='#cbd5e1')
d.text((70,480),'ATS, sourcing, outreach, scheduling, assessments, video, screening & more.',font=font(28),fill='#cbd5e1')
im.save('public/og-image.png')
for sz,name in [(512,'icon-512.png'),(192,'icon-192.png'),(180,'apple-touch-icon.png'),(96,'favicon-96.png')]:
    ic=Image.new('RGB',(sz,sz),'#0b1220'); dd=ImageDraw.Draw(ic); dd.text((sz/2,sz/2+sz*0.02),'RT',font=font(int(sz*0.46)),fill='#c6f135',anchor='mm'); ic.save('public/'+name)
ic=Image.open('public/favicon-96.png').resize((48,48)); ic.save('public/favicon.ico',sizes=[(48,48)])
print('assets ok')
